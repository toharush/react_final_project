import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Auth from "../views/auth/auth";
import Home from "../views/home/home";
import Products from "../views/products/products";
import PrivateRoute from "./safeRoute";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route>
                <Route path="/" element={<Home />} />
                <Route path="auth" element={<Auth />} />
            </Route>
            <Route element={<PrivateRoute />}>
                <Route path="/products" element={<Products />} />
            </Route>
        </Route>
    )
);


function Router() {
    return (
        <RouterProvider router={router} />
    );
}

export default Router;