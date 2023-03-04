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
});

export const signIn = createAsyncThunk("auth/setUser", async (userData) => {
  const { email, password } = userData;
  const loggedIn = await getCurrentUser();
  if (!loggedIn) {
    return await firebaseSignIn(email, password);
  }
});

export const isAdmin = createAsyncThunk("auth/setUser", async () => {
  const user = await getCurrentUser();
  const admin = await isUserAdmin();

  return {
    user,
    admin,
  };
});

export const getCurrentUser = async () => {
  return await getCurrentUserFromFireBase();
};

export const isUserAdmin = async () => {
  return await (
    await axios.get("/auth/isAdmin", {
      headers: {
        authorization: (await getCurrentUser()).uid.toString(),
      },
    })
  ).data;
};

export const signout = createAsyncThunk("auth/signOut", async () => {
  try {
    await (
      await axios.get("/auth/signout", {
        headers: {
          authorization: (await getCurrentUser()).uid.toString(),
        },
      })
    ).data;
    await signOutFromFirebase();
  } catch {}
});
