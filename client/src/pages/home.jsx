import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "../layouts/navbar";
import { loadUser } from "../services/authentication";
import { fetchProducts } from "../store/reducers/products/products";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Home;
