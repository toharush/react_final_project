import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "../../layouts/navbar";
import useWs from "../../hooks/useWs";
import Notification from "../../components/notification/notification";
import { getAuthError, selectProductsErrors } from "../../store/selectors/selectors";
import { getGlobalError } from "../../store/selectors/error/error";

const Home = () => {
  useWs();
  const productsError = useSelector(selectProductsErrors);
  const authError = useSelector(getAuthError);
  const globalError = useSelector(getGlobalError);

  return (
    <>
      <Navbar />
      <Outlet />
      <Notification data={productsError || authError || globalError} type="error" />
    </>
  );
};

export default Home;
