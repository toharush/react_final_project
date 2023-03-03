import { Container } from "@mui/system";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "../../layouts/navbar";
import useWs from "../../hooks/useWs";

import { loadUser } from "../../services/authentication";
import { fetchProducts } from "../../features/productsList";

const Home = () => {
  useWs();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Home;
