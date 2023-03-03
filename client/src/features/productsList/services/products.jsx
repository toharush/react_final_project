import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../lib/axios";

export const fetchAllProducts = async () => {
  return (await (await axios.get("/items")).data) ?? [];
};

export const fetchProducts = createAsyncThunk(
  "products/setProducts",
  async () => await fetchAllProducts()
);