import useUserState from "../hooks/useUserSate";
import Admin from "../views/admin/admin";
import Auth from "../views/auth/auth";
import Cart from "../views/cart/cart";
import Home from "../views/home/home";
import Products from "../views/products/products";
import Route from "./route";
import "./router.css";
import SafeRoutes from "./safeRoute";

export const routes = {
  HOME: "home",
  PRODUCTS: "products",
  AUTH: "auth",
  ADMIN: "admin",
  CART: "cart",
};

function Router() {
  const userState = useUserState();

  return (
    <div className="container">
      <Route Component={<Home />} route={routes.HOME} />
      <Route Component={<Auth />} route={routes.AUTH} />

      <SafeRoutes
        Components={[
          { route: routes.ADMIN, Component: <Admin />, condition: userState.admin },
          { route: routes.CART, Component: <Cart /> },
          { route: routes.PRODUCTS, Component: <Products /> },
        ]}
      />
      {/* 
      <a className="float" onClick={() => dispatch(navigate(routes.CART))}>
        <i className="gg-shopping-cart"></i>
      </a> */}
    </div>
  );
}

export default Router;
