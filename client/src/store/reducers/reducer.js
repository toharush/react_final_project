import { combineReducers } from "redux";
import products from "./products/products";
import auth from "./auth/auth";
import cart from "./cart/cart";
import router from "./router/router";

export default combineReducers({
  productsSlice: products,
  authSlice: auth,
  cart: cart,
  router: router,
});
