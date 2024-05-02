import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL, getBytes } from 'firebase/storage';
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, setDoc, deleteDoc} from 'firebase/firestore';

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
  console.log(res);
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