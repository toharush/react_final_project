import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let isInCart = -1;
      let res = [...state.items];

      res.map((item, index) => {
        if (item._id === action.payload._id) {
          isInCart = index;
        }
      });
      if (isInCart === -1) {
        res.push({ ...action.payload, quantity: 1 });
      } else {
        res[isInCart] = {
          ...res[isInCart],
          quantity: res[isInCart].quantity + 1,
        };
      }
      return {
        ...state,
        items: res,
      };
    },
    setItem: (state, action) => {
      let isInCart = -1;
      let res = [...state.items];
      res.map((item, index) => {
        if (item._id === action.payload._id) {
          isInCart = index;
        }
      });

      if (isInCart !== -1) {
        if (action.payload.quantity <= 0) {
          res.splice(isInCart, 1);
          console.log(res)
        } else {
          res[isInCart] = {
            ...action.payload,
          };
        }
      }
      return {
        ...state,
        items: res,
      };
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        items: state.items.filter((item) => item._id != action.payload._id),
      };
    },
  },
});

export const { addToCart, removeFromCart, setItem } = cartSlice.actions;
export default cartSlice.reducer;
