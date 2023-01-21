import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../store/middlewares/auth/auth";
import { navigate } from "../store/middlewares/router/router";
import { getCurrentPage } from "../store/selectors/router/router";
import { getCurrentUser, isLogin } from "../store/selectors/selectors";
import Auth from "../views/auth/auth";
import Home from "../views/home/home";
import Products from "../views/products/products";

function Router() {
    const dispatch = useDispatch();
    const currentPage = useSelector(getCurrentPage);
    const auth = useSelector(getCurrentUser);

    useEffect(() => {
        if (currentPage == "auth") {
            if (!Boolean(auth)) { dispatch(getUserInfo()); }
            else {
                dispatch(navigate("home"));
            }
        }

    }, [auth, currentPage])

    const handleUnauthorized = () => {
        dispatch(navigate("auth"));
    }

    return (
        <>
            {currentPage == "home" && <Home />}
            {currentPage == "auth" && <Auth />}
            {auth ?
                <>
                    {currentPage == "products" && <Products />}
                </> : handleUnauthorized()}

        </>
    );
}

export default Router;