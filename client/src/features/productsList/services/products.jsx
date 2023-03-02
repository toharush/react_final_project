import { createAsyncThunk } from "@reduxjs/toolkit";
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

export const fetchProducts = createAsyncThunk(
  "products/setProducts",
  async () => await fetchAllProducts()
);