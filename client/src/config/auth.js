// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6K-m7VNHL0WVvocp0s4duTp3FDZRfLkE",
  authDomain: "terminal-a408f.firebaseapp.com",
  projectId: "terminal-a408f",
  storageBucket: "terminal-a408f.appspot.com",
  messagingSenderId: "551646444204",
  appId: "1:551646444204:web:0542f05b17c6d9d15d3d09",
  measurementId: "G-Z3QRTQPWMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);