import { createAsyncThunk } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";
import axios from "../lib/axios";

export const syncCart = createAsyncThunk("cart/setCart", async (userData) => {
  let { userId, cart, newProduct } = userData;
  let carItems = cloneDeep(cart);
  console.log(userId, carItems, newProduct);
  const findItem = await carItems.findIndex(
    (item) =>
      item.productId === newProduct._id &&
      item.size === newProduct.chosen.chosenSize &&
      item.color === newProduct.chosen.chosenColor
  );
  if (findItem >= 0) {
    try {
      carItems[findItem].quantity++;
    } catch (err) {
      console.log(err);
    }
  } else {
    carItems.push({
      productId: newProduct._id,
      size: newProduct.chosen.chosenSize,
      color: newProduct.chosen.chosenColor,
      quantity: 1,
    });
  }

  return userId
    ? (
        await axios.post(
          "/items/cart",
          {
            cart: carItems,
          },
          {
            headers: {
              authorization: userId,
            },
          }
        )
      ).data.products
    : carItems;
});

export const loadCart = createAsyncThunk("cart/setCart", async (userData) => {
  let { userId } = userData;

  return (
    await axios.get("/items/cart", {
      headers: {
        authorization: userId,
      },
    })
  ).data.products;
});
