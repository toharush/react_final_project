import axios from "../../../lib/axios";

export const fetchNewComments = async (comment, rating, userId, productId) => {
  return await axios.post(
    `items/comments`,
    {
      comment,
      rating,
      productId,
    },
    {
      headers: {
        authorization: userId,
      },
    }
  );
};
