// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIRLpGUfGX9uO_AyXbxuGtB8rsxsz260U",
  authDomain: "blog-46604.firebaseapp.com",
  projectId: "blog-46604",
  storageBucket: "blog-46604.appspot.com",
  messagingSenderId: "875376912728",
  appId: "1:875376912728:web:d99f77707791e3eb8a9d2d",
  measurementId: "G-HLM2BNREWK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);
