import axios from "axios"
import { setProducts, setLoading, setError } from "../../reducers/products/products";

export const fetchAllProducts = () => async dispatch => {

    let products = [];
    try {
        dispatch(setLoading(true));
        products = await (await axios("http://localhost:8080/api/v1/items", {
            withCredentials: true
        })).data ?? [];
    } catch(err) {
        dispatch(setError(err));
        console.log(err);
    } finally {
        dispatch(setProducts(products));
        dispatch(setLoading(false));
    }
}