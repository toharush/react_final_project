import axios from "../../../lib/axios";

export const fetchNewComments = async (comment, rating, productId) => {
  return await axios.post(`items/comments`, {
    comment,
    rating,
    productId,
  });
};
