import axios from "../../../lib/axios";

export const fetchProduct = async (id) => {
  try {
    return (await (await axios.get(`/items/${id}`)).data) ?? [];
  } catch (err) {
    console.log(err);
    return null;
  }
};
