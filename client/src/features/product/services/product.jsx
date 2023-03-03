import axios from "../../../lib/axios";

export const fetchProduct = async (id) => {
  try {
    const item = (await (await axios.get(`/items/${id}`)).data) ?? [];
    const comments =
      (await (await axios.get(`/items/${id}/comments`)).data) ?? [];
    return {
      comments,
      ...item,
    };
  } catch (err) {
    console.log(err);
    return null;
  }
};
