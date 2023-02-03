import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    filteredProducts: null,
    loading: true,
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      return { ...state, products: [...action.payload] };
    },
    setFilter: (state, action) => {
      return { ...state, filteredProducts: action.payload }
    },
    setLoading: (state, action) => {
      return { ...state, loading: action.payload };
    },
    setError: (state, action) => {
      return { ...state, error: action.payload };
    },
  },
});

export const { setProducts, setFilter, setLoading, setError } = productsSlice.actions;
export default productsSlice.reducer;
