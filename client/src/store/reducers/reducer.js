import { combineReducers } from 'redux';
import products from "./products/products";

export default combineReducers({
    productsSlice: products,
});