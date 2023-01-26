import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, isUserAdmin } from "../store/middlewares/auth/auth";
import { navigate } from "../store/middlewares/router/router";
import { getCurrentUser, isAdmin } from "../store/selectors/selectors";
import Admin from "../views/admin/admin";
import Auth from "../views/auth/auth";
import Cart from "../views/cart/cart";
import Home from "../views/home/home";
import Products from "../views/products/products";
import Route from "./route";
import "./router.css";
import SafeRoute from "./safeRoute";

export const routes = {
    HOME: "home",
    PRODUCTS: "products",
    AUTH: "auth",
    ADMIN: "admin",
    CART: "cart"
}

function Router() {
    const dispatch = useDispatch();
    const auth = useSelector(getCurrentUser);
    const admin = useSelector(isAdmin);

    useEffect(() => {
        if (!auth) {
            dispatch(getUserInfo());
        } else {
            if (!admin) {
                dispatch(isUserAdmin());
            }
        }
    }, [auth]);

    return (
        <div className="container">
            <Route Component={<Home />} route={routes.HOME} />
            <Route Component={<Auth />} route={routes.AUTH} />

            <SafeRoute Component={<Products />} route={routes.PRODUCTS} />
            <SafeRoute Component={<Cart />} route={routes.CART} />
            <SafeRoute Component={<Admin />} route={routes.ADMIN} AfterCcondition={admin} />
            
            <a className="float" onClick={() => dispatch(navigate(routes.CART))}><i className="gg-shopping-cart"></i></a>
        </div>
    );
}

export default Router;