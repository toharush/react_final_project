import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Product from "../pages/product";
import Admin from "../pages/admin";
import Products from "../pages/products/products";
import Cart from "../views/cart/cart";
import { fetchAllProducts } from "../features/productsList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    id: "root",
    children: [
      {
        path: "products",
        element: <Products />,
        // children: [
        //   {
        //     path: "",
        //     element: (
        //       <>
        //         <Filter />
        //         <ProductFeat />
        //       </>
        //     ),
        //   },
        //   {
        //     path: ":id/:color",
        //     loader: async () => await fetchAllProducts(),
        //     element: <Product />,
        //   },
        // ],
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
    ],
  },
]);

export default router;
