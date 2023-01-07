import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILED } from './actionTypes';


export default (state = { products: [] }, action) => {
  switch (action.type) {      
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload
      };
    case FETCH_PRODUCTS_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};