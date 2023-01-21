import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../store/middlewares/auth/auth";
import { navigate } from "../store/middlewares/router/router";
import { getCurrentPage } from "../store/selectors/router/router";
import { getCurrentUser } from "../store/selectors/selectors";
import Auth from "../views/auth/auth";
import Home from "../views/home/home";
import Products from "../views/products/products";

export const routes = {
    HOME: "home",
    PRODUCTS: "products",
    AUTH: "auth"
}

function Router() {
    const dispatch = useDispatch();
    const currentPage = useSelector(getCurrentPage);
    const auth = useSelector(getCurrentUser);

    useEffect(() => {
        if (currentPage == routes.AUTH) {
            if (!Boolean(auth)) { dispatch(getUserInfo()); }
            else {
                dispatch(navigate(routes.HOME));
            }
        }

    }, [auth, currentPage])

    const handleUnauthorized = () => {
        dispatch(navigate(routes.AUTH));
    }

    return (
        <>
            {currentPage == routes.HOME && <Home />}
            {currentPage == routes.AUTH && <Auth />}
            {auth ?
                <>
                    {currentPage == routes.PRODUCTS && <Products />}
                </> : handleUnauthorized()}

        </>
    );
}

export default Router;