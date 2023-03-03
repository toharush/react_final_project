import axios from "../../../lib/axios";

export const fetchNewComments = async(comment, productId) => {
    return await axios.post(`items/comments`, {
        comment,
        productId
    });
}
