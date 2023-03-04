import auth from "../lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updatePassword
} from "firebase/auth";

export const firebaseSignIn = async (email, password) => {
  return (await signInWithEmailAndPassword(auth, email, password)).user;
};

export const firebasecreateUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const getCurrentUserFromFireBase = async() => {
  return await auth.currentUser ?? null;
}

export const signOutFromFirebase = async() => {
  return await signOut(auth);
}

export const changePassword = async(user, password) => {
  return await updatePassword(user, password);
}
