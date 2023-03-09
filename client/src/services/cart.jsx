import { createAsyncThunk } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";
import axios from "../lib/axios";

export const syncCart = createAsyncThunk("cart/setCart", async (userData) => {
  let { userId, cart, quantity, newProduct, count } = userData;
  let carItems = cart ? cloneDeep(cart) : [];
  const findItem = await carItems.findIndex(
    (item) =>
      item.productId === newProduct._id &&
      item.size === newProduct.chosen.chosenSize &&
      item.color === newProduct.chosen.chosenColor
  );
  if (findItem >= 0) {
    if (count <= 0) {
      carItems.splice(findItem, 1);
    } else if (count) {
      carItems[findItem].quantity = Number(count);
    } else {
      carItems[findItem].quantity =
        Number(carItems[findItem].quantity) + Number(quantity);
    }
  } else {
    carItems.push({
      productId: newProduct._id,
      size: newProduct.chosen.chosenSize,
      color: newProduct.chosen.chosenColor,
      quantity: 1,
    });
  }
  if (userId) {
    axios.post(
      "/items/cart",
      {
        cart: carItems,
      },
      {
        headers: {
          authorization: userId,
        },
      }
    );
  }
  return carItems;
});

export const loadCart = createAsyncThunk("cart/setCart", async (userData) => {
  let { userId } = userData;

  return (
    await axios.get("/items/cart", {
      headers: {
        authorization: userId,
      },
    })
  ).data.products.map((product) => ({
    ...product,
    quantity: Number(product.quantity),
  }));
});
