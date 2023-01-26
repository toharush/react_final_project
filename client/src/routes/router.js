import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, isUserAdmin } from "../store/middlewares/auth/auth";
import { navigate } from "../store/middlewares/router/router";
import { getCurrentPage } from "../store/selectors/router/router";
import { getCurrentUser, isAdmin } from "../store/selectors/selectors";
import Admin from "../views/admin/admin";
import Auth from "../views/auth/auth";
import Cart from "../views/cart/cart";
import Home from "../views/home/home";
import Products from "../views/products/products";
import "./router.css";

export const routes = {
    HOME: "home",
    PRODUCTS: "products",
    AUTH: "auth",
    ADMIN: "admin",
    CART: "cart"
}

function Router() {
    const dispatch = useDispatch();
    const currentPage = useSelector(getCurrentPage);
    const auth = useSelector(getCurrentUser);
    const admin = useSelector(isAdmin);

    useEffect(() => {
        if (currentPage == routes.AUTH) {
            if (!Boolean(auth)) { dispatch(getUserInfo()); dispatch(isUserAdmin()); }
            else {
                dispatch(navigate(routes.HOME));
            }
        }

    }, [auth, currentPage])

    const handleUnauthorized = () => {
        dispatch(navigate(routes.AUTH));
    }

    return (
        <div className="container">
            {currentPage == routes.HOME && <Home />}
            {currentPage == routes.AUTH && <Auth />}
            {auth ?
                <>
                    {currentPage == routes.PRODUCTS && <Products />}
                    {currentPage == routes.CART && <Cart />}
                    {admin && <>
                        {currentPage == routes.ADMIN && <Admin />}
                    </>}
                </> : handleUnauthorized()}
                <a class="float" onClick={() => dispatch(navigate(routes.CART))}><i class="gg-shopping-cart"></i></a>
        </div>
    );
}

export default Router;