import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "../../layouts/navbar";
import Notification from "../../components/notification/notification";
import {
  getAuthError,
  selectProductsErrors,
} from "../../store/selectors/selectors";
import { getGlobalError } from "../../store/selectors/error/error";
import { useEffect } from "react";
import { isAdmin } from "../../services/authentication";

const Home = ({ scrollToTop }) => {
  const dispatch = useDispatch();
  const productsError = useSelector(selectProductsErrors);
  const authError = useSelector(getAuthError);
  const globalError = useSelector(getGlobalError);

  useEffect(() => {
    setTimeout(() => dispatch(isAdmin()), 1000);
  }, []);

  return (
    <>
      <Navbar scrollToTop={scrollToTop} />
      <Outlet />

      <Notification
        data={productsError || authError || globalError}
        type="error"
      />
    </>
  );
};

export default Home;
