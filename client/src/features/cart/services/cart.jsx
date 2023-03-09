import axios from "../../../lib/axios";
import { loadCart } from "../../../services/cart";
import { setError } from "../../../store/reducers/error/error";
import { fetchProducts } from "../../productsList";

export const buyServer = async (userId, products, dispatch) => {
  try {
    await axios.post(
      "/items/buy",
      {
        products
      },
      {
        headers: {
          authorization: userId,
        },
      }
    );
    dispatch(loadCart({ userId: userId }));
    dispatch(fetchProducts());
  } catch (err) {
    dispatch(setError(err.message));
  }
};
