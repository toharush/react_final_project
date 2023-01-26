import { useSelector } from "react-redux";
import { getCurrentPage } from "../store/selectors/router/router";

function Route({ Component, route }) {
    const currentPage = useSelector(getCurrentPage);

    return (
        <>
            {currentPage === route && Component}
        </>
    );
}

export default Route;