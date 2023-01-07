import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import {
    RouterProvider,
  } from "react-router-dom";
import auth from "./auth";
import home from "./home";
import products from "./products";
import product from "./product";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            {home}
            {auth}
            {products}
            {product}
        </Route>
    )
);


function Router() {
    return (
        <RouterProvider router={router} />
    );
  }
  
export default Router;