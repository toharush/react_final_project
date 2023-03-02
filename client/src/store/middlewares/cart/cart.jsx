import axios from "../../../lib/axios";
import { addToCart } from "../../reducers/cart/cart";

export const AddToCartServer = (product, isAdd) => async (dispatch) => {
  try {
    dispatch(addToCart(product));
    await await axios.get("/items/cart/add/" + product._id);
  } catch (err) {
    console.log(err);
  }
};



