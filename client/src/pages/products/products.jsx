import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { default as ProductsFeat, SearchProducts } from "../../features/products";
import Delivery from "../../components/delivery/delivery";
import { fetchProducts } from "../../store/reducers/products/products";
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
      <ProductsFeat />
    </>
  );
};

export default Products;
