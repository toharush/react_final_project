import axios from "../../../lib/axios";

export const fetchAllProducts = async () => {
  let products = [];
  try {
    products = (await (await axios.get("/items")).data) ?? [];
  } catch (err) {
    console.log(err);
  } finally {
    return products;
  }
};
