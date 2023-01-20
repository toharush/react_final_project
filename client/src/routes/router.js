import { useDispatch, useSelector } from "react-redux";
import { navigate } from "../store/middlewares/router/router";
import { getCurrentPage } from "../store/selectors/router/router";
import { isLogin } from "../store/selectors/selectors";
import Auth from "../views/auth/auth";
import Home from "../views/home/home";
import Products from "../views/products/products";

function Router() {
    const dispatch = useDispatch();
    const currentPage = useSelector(getCurrentPage);
    const auth = useSelector(isLogin);

    const handleUnauthorized = () => {
        dispatch(navigate("auth"))
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