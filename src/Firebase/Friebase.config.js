// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9syU2Is71mRu6ICHsdRrDxMTGyIxEEqQ",
  authDomain: "b12-a10-online-learning.firebaseapp.com",
  projectId: "b12-a10-online-learning",
  storageBucket: "b12-a10-online-learning.firebasestorage.app",
  messagingSenderId: "158043890178",
  appId: "1:158043890178:web:2217111735f4a12856fd1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export default app;