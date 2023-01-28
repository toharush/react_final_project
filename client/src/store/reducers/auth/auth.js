import { createSlice } from "@reduxjs/toolkit";

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
});

export const { setLoading, setError, setUser, setIsAdmin, setAdminMsg } = tokenSlice.actions;
export default tokenSlice.reducer;
