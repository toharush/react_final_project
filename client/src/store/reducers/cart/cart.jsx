import { createSlice } from "@reduxjs/toolkit";
import { syncCart } from "../../../services/cart";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(syncCart.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;
