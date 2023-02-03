import { createSlice } from "@reduxjs/toolkit";
import { filter } from 'lodash';

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    filteredProducts: [],
    search: null,
    sortProducts: null,
    loading: true,
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      return { ...state, products: [...action.payload] };
    },
    setFilter: (state, action) => {
      return { ...state, filteredProducts: [...state.filteredProducts, action.payload] }
    },
    setSearch: (state, action) => {
      return { ...state, search: action.payload }
    },
    setSort: (state, action) => {
      return { ...state, sortProducts: action.payload}
    },
    setLoading: (state, action) => {
      return { ...state, loading: action.payload };
    },
    setError: (state, action) => {
      return { ...state, error: action.payload };
    },
  },
});

export const { setProducts, setFilter, setLoading, setError, setSort, setSearch } = productsSlice.actions;
export default productsSlice.reducer;
