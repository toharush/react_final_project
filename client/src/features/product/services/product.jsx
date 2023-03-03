import axios from "../../../lib/axios";
import { setError } from "../../../store/reducers/error/error";

export const fetchProduct = async (id, dispatch) => {
  try {
    const item = (await (await axios.get(`/items/${id}`)).data) ?? [];
    const comments =
      (await (await axios.get(`/items/${id}/comments`)).data) ?? [];
    return {
      comments,
      ...item,
    };
  } catch (err) {
    dispatch(setError(err.message));
    console.log(err);
    return null;
  }
};

