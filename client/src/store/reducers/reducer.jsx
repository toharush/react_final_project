import { combineReducers } from "redux";
import products from "./products/products";
import auth from "./auth/auth";
import cart from "./cart/cart";
import error from "./error/error";

export default combineReducers({
  products: products,
  auth: auth,
  cart: cart,
  error: error
});
