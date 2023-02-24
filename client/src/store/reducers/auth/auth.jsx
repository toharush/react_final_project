import { createSlice } from "@reduxjs/toolkit";
import { loadUser, logout, signIn } from "../../../services/authentication";

export const tokenSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    admin: {
      isAdmin: false,
      msg: null,
    },
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      return { ...state, user: action.payload };
    },
    setIsAdmin: (state, action) => {
      return {
        ...state,
        admin: {
          ...state.admin,
          isAdmin: action.payload,
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
    builder.addCase(logout.fulfilled, (state, action) => {
      state.user = null;
      state.loading = false;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
    builder.addCase(loadUser.pending || logout.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.admin.isAdmin = action.payload.admin;
      state.loading = false;
    });
    builder.addCase(loadUser.rejected, (state, action) => {
      state.error = action.error;
      state.user = null;
      state.loading = false;
    });
  },
});

export const { setLoading, setError, setUser, setIsAdmin, setAdminMsg } =
  tokenSlice.actions;
export default tokenSlice.reducer;
