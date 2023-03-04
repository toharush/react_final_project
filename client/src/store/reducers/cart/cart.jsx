import { createSlice } from "@reduxjs/toolkit";
import { syncCart } from "../../../services/cart";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (!product) {
        return {
          ...state,
          items: [
            ...state.items,
            {
              ...action.payload,
              chosen: [
                {
                  ...action.payload.chosen,
                  quantity: 1,
                },
              ],
            },
          ],
        };
      } else {
        const color = product.chosen.find((item) =>
          item.chosenSize === action.payload.chosen.chosenSize &&
            item.chosenColor === action.payload.chosen.chosenColor
        );
        if (!color) {
          return {
            ...state,
            items: [
              ...state.items.filter((item) => item != product),
              {
                ...product,
                chosen: [
                  ...product.chosen,
                  {
                    ...action.payload.chosen,
                    quantity: 1,
                  },
                ],
              },
            ],
          };
        } else {
          return {
            ...state,
            items: [
              ...state.items.filter((item) => item != product),
              {
                ...product,
                chosen: [
                  ...product.chosen.filter((item) => item != color),
                  {
                    ...color,
                    quantity: color.quantity + 1,
                  },
                ],
              },
            ],
          };
        }
      }
    },
    setItem: (state, action) => {
      let isInCart = -1;
      let res = [...state.items];
      res.map((item, index) => {
        if (
          item._id === action.payload._id &&
          item.chosenColor === action.payload.chosenColor &&
          item.chosenSize === action.payload.chosenSize
        ) {
          isInCart = index;
        }
      });

      if (isInCart !== -1) {
        if (action.payload.quantity <= 0) {
          res.splice(isInCart, 1);
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
  extraReducers: (builder) => {
    builder.addCase(syncCart.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  }
});

export const { addToCart, removeFromCart, setItem } = cartSlice.actions;
export default cartSlice.reducer;
