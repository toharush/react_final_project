import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
      products: [],
      loading: true,
  },
  reducers: {
    setProducts: (state, action) => {
      return { ...state, products: [...action.payload]}
    },
    setLoading: (state, action) => {
      return { ...state, loading: action.payload}
    }
  },
});

export const { setProducts, setLoading } = productsSlice.actions;
export default productsSlice.reducer;