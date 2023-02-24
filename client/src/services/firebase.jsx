import auth from "../lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const firebaseSignIn = async (email, password) => {
  return (await signInWithEmailAndPassword(auth, email, password)).user;
};

export const firebasecreateUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
