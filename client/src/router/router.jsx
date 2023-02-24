import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Product from "../features/product";
import Admin from "../pages/admin";
import Products from "../pages/products";
import ProductFeat from "../features/products";
import Filter from "../features/filter";
import Search from "../features/search";
import Cart from "../views/cart/cart";
import { fetchAllProducts } from "../features/products/services/products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    id: "root",
    children: [
      {
        path: "products",
        element: <Products />,
        children: [
          {
            path: "",
            element: (
              <>
                <Search />
                <Filter />
                <ProductFeat />
              </>
            ),
          },
          {
            path: ":id",
            loader: async () => await fetchAllProducts(),
            element: <Product />,
          },
        ],
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
