import { createSlice } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import {
  isAdmin,
  signIn,
  signout,
  signUp,
} from "../../../services/authentication";

export const tokenSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    admin: {
      isAdmin: false,
      msg: [],
    },
    loading: false,
    error: null,
  },
  reducers: {
    setIsAdmin: (state, action) => {
      return {
        ...state,
        admin: {
          ...state.admin,
          isAdmin: action.payload,
        },
      };
    },
    setReloadUser: (state, action) => {
      return {
        ...state,
        user: {
          ...state.user,
          reloadUser: new Date().toLocaleTimeString(),
        },
      };
    },
    setAdminMsg: (state, action) => {
      return {
        ...state,
        admin: {
          ...state.admin,
          msg: action.payload,
        },
      };
    },
    setLoading: (state, action) => {
      return { ...state, loading: action.payload };
    },
    setError: (state, action) => {
      return { ...state, error: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(isAdmin.fulfilled, (state, action) => {
      state.admin.isAdmin = action.payload.admin;
      state.user = {
        ...action.payload.user,
        reloadUser: new Date().toLocaleTimeString(),
      };
      state.loading = false;
    });
    builder.addCase(isAdmin.rejected, (state, action) => {
      state.error = action.error.message;
      state.admin = {
        isAdmin: null,
        msg: [],
      };
      state.user = null;
      state.loading = false;
    });
    builder.addCase(
      signIn.pending || signUp.pending || isAdmin.pending || signout.pending,
      (state, action) => {
        state.loading = true;
      }
    );
    builder.addCase(signout.fulfilled, (state, action) => {
      state.user = null;
      state.admin = {
        isAdmin: null,
        msg: [],
      };
      state.loading = false;
    });
    builder.addCase(signIn.rejected || signUp.rejected, (state, action) => {
      state.user = null;
      state.admin = {
        isAdmin: null,
        msg: [],
      };
      state.loading = false;
    });
    builder.addCase(signIn.fulfilled || signUp.fulfilled, (state, action) => {
      state.user = {
        ...action.payload,
        reloadUser: new Date().toLocaleTimeString(),
      };
      state.admin = {
        isAdmin: null,
        msg: [],
      };
      state.loading = false;
    });
    builder.addCase(signout.fulfilled, (state, action) => {
      state.admin.isAdmin = null;
      state.admin.user = null;
      state.loading = false;
    });
  },
});

export const { setLoading, setError, setIsAdmin, setAdminMsg, setReloadUser } =
  tokenSlice.actions;
export default tokenSlice.reducer;
