import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductsList from "../../features/productsList";
import Delivery from "../../components/delivery/delivery";
import { fetchProducts } from "../../features/productsList";
import "./products.css";
import Filter from "../../features/filter/filter";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("run");
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Box className="delivery">
        <Delivery />
      </Box>
      <Filter />
      <ProductsList />
    </>
  );
};

export default Products;
