import axios from "../../../utils/axios";
import {
  setProducts,
  setLoading,
  setError,
} from "../../reducers/products/products";

export const fetchAllProducts = () => async (dispatch) => {
  let products = [];
  try {
    dispatch(setLoading(true));
    products = (await (await axios.get("/items")).data) ?? [];
  } catch (err) {
    dispatch(setError(err));
    console.log(err);
  } finally {
    dispatch(setProducts(products));
    dispatch(setLoading(false));
  }
};
