import { createSlice } from "@reduxjs/toolkit";
import { isAdmin, signIn, signout } from "../../../services/authentication";

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
      state.user = action.payload.user;
      state.admin.isAdmin = action.payload.admin;
      state.loading = false;
    });
    builder.addCase(isAdmin.rejected, (state, action) => {
      state.error = action.error.message;
      state.admin.isAdmin = null;
      state.loading = false;
    });
    builder.addCase(signout.fulfilled, (state, action) => {
      state.admin.isAdmin = null;
      state.admin.user = null;
      state.loading = false;
    });
  },
});

export const { setLoading, setError, setIsAdmin, setAdminMsg } =
  tokenSlice.actions;
export default tokenSlice.reducer;
