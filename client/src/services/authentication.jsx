import { createAsyncThunk } from "@reduxjs/toolkit";
import cookies from "../lib/cookies";
import axios from "../lib/axios";
import { firebasecreateUser, firebaseSignIn } from "./firebase";

export const signUp = createAsyncThunk("auth/setUser", async (userData) => {
  const { email, password } = userData;
  try {
    if (!cookies.get("user")) {
      const user = await firebasecreateUser(email, password);

      await registerLoginInServer(user);
    }
    return await loadUser();
  } catch (e) {
    throw e;
  }
});

export const signIn = createAsyncThunk("auth/setUser", async (userData) => {
  const { email, password } = userData;
  try {
    if (!cookies.get("user")) {
      const user = await firebaseSignIn(email, password);
      await registerLoginInServer(user);
    }
    return await loadUser();
  } catch (e) {
    throw e;
  }
});

export const loadUser = createAsyncThunk("auth/setUser", async () => {
  try {
    const user = await getCurrentUser();
    const admin = await isUserAdmin();
    return { user: user, admin: admin };
  } catch (e) {
    throw e;
  }
});

export const registerLoginInServer = async (user) => {
  await axios.post(
    "/auth",
    {},
    {
      headers: {
        Authorization: user.stsTokenManager.accessToken,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
};

export const getCurrentUser = async () => {
  return await (
    await axios.get("/auth")
  ).data;
};

export const isUserAdmin = async () => {
  return await (
    await axios.get("/auth/isAdmin")
  ).data;
};

export const logout = createAsyncThunk("auth/logout", async () => {
  return await axios.get("/auth/logout");
});
