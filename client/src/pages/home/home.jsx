import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "../../layouts/navbar";
import Notification from "../../components/notification/notification";
import {
  getAuthError,
  selectProductsErrors,
} from "../../store/selectors/selectors";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";
import { app } from "../../lib/firebase";
import { getGlobalError } from "../../store/selectors/error/error";
import { useEffect, useState } from "react";
import { getCurrentUser, isAdmin, signIn } from "../../services/authentication";

const Home = () => {
  const dispatch = useDispatch();
  const productsError = useSelector(selectProductsErrors);
  const authError = useSelector(getAuthError);
  const globalError = useSelector(getGlobalError); // State to store uploaded file

  useEffect(() => {
    setTimeout(() => dispatch(isAdmin()), 1000);
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />

      <Notification
        data={productsError || authError || globalError}
        type="error"
      />
    </>
  );
};

export default Home;
