// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRCeIQgX74r58gQU6T-DmskzCu-yrJLuY",
  authDomain: "code3xtask.firebaseapp.com",
  projectId: "code3xtask",
  storageBucket: "code3xtask.firebasestorage.app",
  messagingSenderId: "528896187637",
  appId: "1:528896187637:web:56b02696463cfeade5f9bc",
  measurementId: "G-S4PT9W6H64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
