import axios from "../../../lib/axios";

export const fetchNewComments = async (comment, rating, productId, id) => {
  return await axios.post(`items/comments`, {
    comment,
    rating,
    productId,
  },{
    headers: {
        authorization: id
    }
  });
};
