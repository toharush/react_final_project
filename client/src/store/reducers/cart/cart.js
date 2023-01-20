import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
      items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      return { ...state, items: [...state.items, action.payload]}
    },
    removeFromCart: (state, action) => {
      return { ...state, items: state.items.filter(item => item.id != action.payload.id)}
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;