import axios from "axios"
import { setProducts, setLoading } from "../../reducers/products/products";

export const fetchAllProducts = () => async dispatch => {
    let products = [];
    try {
        dispatch(setLoading(true));
        products = await (await axios("http://localhost:8080/items")).data ?? [];
    } catch(err) {
        console.log(err);
    } finally {
        dispatch(setProducts(products));
        dispatch(setLoading(false));
    }
}