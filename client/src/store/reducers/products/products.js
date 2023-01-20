import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
      products: [],
      loading: true,
      error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      return { ...state, products: [...action.payload]}
    },
    setLoading: (state, action) => {
      return { ...state, loading: action.payload}
    },
    setError: (state, action) => {
      return { ...state, error: action.payload }
    }
  },
});

export const { setProducts, setLoading, setError } = productsSlice.actions;
export default productsSlice.reducer;