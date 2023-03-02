import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Product from "../pages/product/product";
import Admin from "../pages/admin/admin";
import Products from "../pages/products/products";
import Cart from "../pages/cart/cart";
import Profile from "../pages/profile/profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    id: "root",
    children: [
      {
        path: "products",
        element: <Products />,
      },
      {
        path: ":id/:color",
        element: <Product />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "profile",
        element: <Profile />
      }
    ],
  },
]);

export default router;
