import {
    Route
  } from "react-router-dom";
import Products from "../views/product/product";
export default <Route path="/product/:id" element={ <Products /> } />