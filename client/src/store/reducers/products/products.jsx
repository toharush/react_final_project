import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../../../features/productsList";

const initialState = {
  products: [],
  searchedProducts: null,
  filter: {
    search: null,
    color: null,
    price: null,
    size: null,
    supplier: null,
  },
  sortProducts: null,
  loading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setInitState: (state, action) => {
      return { ...initialState };
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
    setSearchedProducts: (state, action) => {
      return { ...state, searchedProducts: action.payload };
    },
    setSort: (state, action) => {
      return { ...state, sortProducts: action.payload };
    },
    setError: (state, action) => {
      return { ...state, error: action.payload };
    },
    setCurrentProduct: (state, action) => {
      return { ...state, currentProduct: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      console.log(action.error.message)
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export const {
  setFilter,
  setError,
  setSort,
  setSearchedProducts,
  setInitState,
  setCurrentProduct,
} = productsSlice.actions;
export default productsSlice.reducer;
