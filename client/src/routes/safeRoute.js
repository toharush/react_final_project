import { useDispatch, useSelector } from "react-redux";
import { navigate } from "../store/middlewares/router/router";
import { getCurrentUser } from "../store/selectors/selectors";
import Route from "./route";
import { routes } from "./router";

function SafeRoute({ Component, route, BeforeCcondition = true, AfterCcondition = true }) {
    const dispatch = useDispatch();
    const auth = useSelector(getCurrentUser);

    const handleUnauthorized = () => {
        dispatch(navigate(routes.AUTH));
    }

    return (
        <>
            {BeforeCcondition && auth && AfterCcondition ? <Route Component={Component} route={route} /> : handleUnauthorized()}
        </>
    );
}

export default SafeRoute;