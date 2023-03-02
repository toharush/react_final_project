import { combineReducers } from "redux";
import products from "./products/products";
import auth from "./auth/auth";
import cart from "./cart/cart";

export default combineReducers({
  products: products,
  auth: auth,
  cart: cart,
});