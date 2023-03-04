import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: {
    error: null,
  },
  reducers: {
    setError: (state, action) => {
      return { ...state, error: action.payload };
    },
  },
});

export const { setError } = errorSlice.actions;
export default errorSlice.reducer;
