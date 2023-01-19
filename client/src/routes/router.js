import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import auth from "./auth";
import home from "./home";
import products from "./products";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            {home}
            {auth}
            {products}
        </Route>
    )
);


function Router() {
    return (
        <RouterProvider router={router} />
    );
  }
  
export default Router;