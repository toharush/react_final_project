import { createSlice } from "@reduxjs/toolkit";
import { isAdmin, signIn } from "../../../services/authentication";

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
    reloadUser: new Date().toLocaleTimeString(),
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
      return { ...state, reloadUser: new Date().toLocaleTimeString() };
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
    builder.addCase(isAdmin.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(isAdmin.fulfilled, (state, action) => {
      state.admin.isAdmin = action.payload;
      state.loading = false;
    });
    builder.addCase(isAdmin.rejected, (state, action) => {
      state.error = action.error.message;
      state.admin.isAdmin = null;
      state.user = null;
      state.loading = false;
    });
  },
});

export const { setLoading, setError, setIsAdmin, setAdminMsg, setReloadUser } =
  tokenSlice.actions;
export default tokenSlice.reducer;
