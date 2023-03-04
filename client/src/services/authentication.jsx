import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../lib/axios";
import {
  firebasecreateUser,
  firebaseSignIn,
  getCurrentUserFromFireBase,
  signOutFromFirebase,
} from "./firebase";

export const signUp = createAsyncThunk("auth/setUser", async (userData) => {
  const { email, password } = userData;
  const loggedIn = await getCurrentUser();
  if (!loggedIn) {
    return await firebasecreateUser(email, password);
  }
  return loggedIn;
});

export const signIn = createAsyncThunk("auth/setUser", async (userData) => {
  const { email, password } = userData;
  const loggedIn = await getCurrentUser();
  if (!loggedIn) {
    return await firebaseSignIn(email, password);
  }
  return loggedIn;
});

export const isAdmin = createAsyncThunk("auth/setAdmin", async () => {
  const user = await getCurrentUser();
  let admin;
  if(user) {
    admin = await isUserAdmin(user.uid);
  }
  return { admin, user };
});

export const getCurrentUser = async () => {
  console.log(await getCurrentUserFromFireBase())
  return await getCurrentUserFromFireBase();
};

export const isUserAdmin = async (id) => {
  return await (
    await axios.get("/auth/isAdmin", {
      headers: {
        authorization: id,
      },
    })
  ).data;
};

export const signout = createAsyncThunk("auth/signOut", async () => {
  await (
    await axios.get("/auth/signout", {
      headers: {
        authorization: (await getCurrentUser()).uid.toString(),
      },
    })
  ).data;
  return await signOutFromFirebase();
});
