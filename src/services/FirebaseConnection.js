import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBlysxGk8vaA5hhWmr6Lq1rP4-8vaDSijE",
    authDomain: "sistema-de-b07c3.firebaseapp.com",
    projectId: "sistema-de-b07c3",
    storageBucket: "sistema-de-b07c3.appspot.com",
    messagingSenderId: "352065962870",
    appId: "1:352065962870:web:597385f71b97d677407057",
    measurementId: "G-RER76T3MFX"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
  