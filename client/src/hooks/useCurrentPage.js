import { useSelector } from "react-redux";
import { getCurrentPage } from "../store/selectors/router/router";

function useCurrentPage({ page }) {
    const currentPage = useSelector(getCurrentPage);
    
    if(currentPage === page) {
        return true;
    } 
    return false;
}

export default useCurrentPage;