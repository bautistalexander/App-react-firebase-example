import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL, getBytes } from 'firebase/storage';
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, setDoc, deleteDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBfQu8s_p3HxS48ZGGHxbz8EGSORJ3fjcg',
  authDomain: 'app-react-firebase-example.firebaseapp.com',
  projectId: 'app-react-firebase-example',
  storageBucket: 'app-react-firebase-example.appspot.com',
  messagingSenderId: '424459388067',
  appId: '1:424459388067:web:d397f82cde312615c4eb16'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const userExists = async (uid) => {
  const docRef = doc(db, 'users', uid);
  const res = await getDoc(docRef);
  return res.exists();
};

export const existsUsername = async (username) => {
  const users = [];
  const docsRef = collection(db, 'users');
  const q = query(docsRef, where('username', '==', username));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(doc => {
    users.push(doc.data());
  });
  return users.length > 0 ? users[0].uid : null;
};

export const registerNewUser = async (user) => {
  try {
    const collectionRef = collection(db, 'users');
    const docRef = doc(collectionRef, user.uid);
    await setDoc(docRef, user);
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (user) => {
  try {
    const collectionRef = collection(db, 'users');
    const docRef = doc(collectionRef, user.uid);
    await setDoc(docRef, user);
  } catch (error) {
    console.log(error);
  }
};

export const getUserInfo = async (uid) => {
  try {
    const docRef = doc(db, 'users', uid);
    const document = await getDoc(docRef);
    return document.data();
  } catch (error) {
    console.log(error);
  }
};

export const insertNewLink = async (link) => {
  try {
    const docRef = collection(db, 'links');
    const res = await addDoc(docRef, link);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getLinks = async (uid) => {
  const links = [];
  try {
    const collectionRef = collection(db, 'links')
    const q = query(collectionRef, where('uid', '==', uid));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      const link = { ...doc.data() };
      link.docId = doc.id;
      links.push(link);
    });
    return links;
  } catch (error) {
    console.log(error);
  }
};

export const updateLink = async (docId, link) => {
  try {
    const docRef = doc(db, 'links', docId);
    const res = await setDoc(docRef, link);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const deleteLink = async (docId) => {
  try {
    const docRef = doc(db, 'links', docId);
    await deleteDoc(docRef);
  } catch (error) {
    console.log(error);
  }
};


// aqui es para enviar imagenes a firebase
export const setUserProfilePhoto = async (uid, file) => {
  try {
    const imageRef = ref(storage, `images/${uid}`); // aquí especifico donde guardaré mi imagen y con que nombre
    const resUpload = await uploadBytes(imageRef, file);
    return resUpload;
  } catch (error) {
    console.log(error);
  }
};

export const getProfilePhotoUrl = async (profilePicture) => {
  try {
    const imageRef = ref(storage, profilePicture);

    const urlOfImage = await getDownloadURL(imageRef);

    return urlOfImage;
  } catch (error) {
    console.log(error);
  }
};
// aqui es para enviar imagenes a firebase ----------- es hasta aqui

export const getUserPublicProfileInfo = async (uid) => {
  try {
    const profileInfo = await getUserInfo(uid);
    const linksInfo = await getLinks(uid);
    return {
      profileInfo,
      linksInfo
    }
  } catch (error) {
    console.log(error);
  }
};