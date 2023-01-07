import { FETCH_PRODUCTS_FAILED, FETCH_PRODUCTS_SUCCESS } from '../reducers/actionTypes';
import axios from "axios";
import store from "../store";


export const fetchItems = async() => {
    axios("http://localhost:8080/items").then(res => {console.log(res.data); return store.dispatch(fetchItemsSuccess(res.data))}).catch(err => store.dispatch(fetchItemsFailed()));
}

export const fetchItemsSuccess = (data) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: data
    }
}

export const fetchItemsFailed = () => {
    return {
        type: FETCH_PRODUCTS_FAILED
    }
}
