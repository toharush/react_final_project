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
        errorElement: (
          <FourOFour
            errorNumber="500"
            errorName="We run in some error"
            errorMsg="Try something else while we are fixing it!"
          />
        ),
      },
      {
        path: ":id/:color",
        element: <Product />,
        errorElement: (
          <FourOFour
            errorNumber="500"
            errorName="We run in some error"
            errorMsg="Try something else while we are fixing it!"
          />
        ),
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: (
          <FourOFour
            errorNumber="500"
            errorName="We run in some error"
            errorMsg="Try something else while we are fixing it!"
          />
        ),
      },
      {
        path: "admin",
        element: <Admin />,
        errorElement: (
          <FourOFour
            errorNumber="500"
            errorName="We run in some error"
            errorMsg="Try something else while we are fixing it!"
          />
        ),
      },
      {
        path: "*",
        element: (
          <FourOFour
            errorNumber="404"
            errorName="Look like you're lost"
            errorMsg="the page you are looking for not avaible!"
          />
        ),
      },
      {
        path: "profile",
        element: <Profile />
      }
    ],
  },
]);

export default router;
