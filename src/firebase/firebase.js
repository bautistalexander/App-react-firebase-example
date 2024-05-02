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
