import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  filter: {
    name: null,
    color: null,
    price: null,
    size: null,
  },
  sortProducts: null,
  loading: true,
  error: null,
};
export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setInitState: (state, action) => {
      return { ...initialState };
    },
    setProducts: (state, action) => {
      return { ...state, products: [...action.payload] };
    },
    setFilter: (state, action) => {
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.payload,
        },
      };
    },
    setSort: (state, action) => {
      return { ...state, sortProducts: action.payload };
    },
    setLoading: (state, action) => {
      return { ...state, loading: action.payload };
    },
    setError: (state, action) => {
      return { ...state, error: action.payload };
    },
  },
});

export const {
  setProducts,
  setFilter,
  setLoading,
  setError,
  setSort,
  setInitState,
} = productsSlice.actions;
export default productsSlice.reducer;
