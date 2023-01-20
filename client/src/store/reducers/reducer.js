import { combineReducers } from 'redux';
import products from "./products/products";
import auth from './auth/auth';

export default combineReducers({
    productsSlice: products,
    authSlice: auth
});