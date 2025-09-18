// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEFLPbu5XTucx_VGPaoswIHS6YGP5oZak",
  authDomain: "jobready-c4a43.firebaseapp.com",
  projectId: "jobready-c4a43",
  storageBucket: "jobready-c4a43.firebasestorage.app",
  messagingSenderId: "950667025905",
  appId: "1:950667025905:web:4645e51a5f376e32e13850",
  measurementId: "G-R9L6TJ3J56"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);