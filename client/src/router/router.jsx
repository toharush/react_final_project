import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Product from "../pages/product/product";
import Admin from "../pages/admin/admin";
import Products from "../pages/products/products";
import Cart from "../pages/cart/cart";
import FourOFour from "../pages/404/404";
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
        errorElement: <FourOFour errorNumber="500" />,
      },
      {
        path: ":id/:color",
        element: <Product />,
        errorElement: <FourOFour errorNumber="500" />,
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: <FourOFour errorNumber="500" />,
      },
      {
        path: "admin",
        element: <Admin />,
        errorElement: <FourOFour errorNumber="500" />,
      },
      {
        path: "*",
        element: <FourOFour errorNumber="404" />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
