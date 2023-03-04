import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsList from "../../features/productsList";
import Delivery from "../../components/delivery/delivery";
import { fetchProducts } from "../../features/productsList";
import "./products.css";
import Filter from "../../features/filter/filter";
import { selectProductsWithFilter } from "../../store/selectors/selectors";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsWithFilter);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Box className="delivery">
        <Delivery />
      </Box>
      <Filter />
      <ProductsList products={products} />
    </>
  );
};

export default Products;
