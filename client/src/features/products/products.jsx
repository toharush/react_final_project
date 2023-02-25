import Product from "./components/product/product";
import Grid2 from "@mui/material/Unstable_Grid2";
import {
  getLoadingState,
  selectProductsWithFilter,
} from "../../store/selectors/selectors";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/reducers/cart/cart";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsWithFilter);
  const loading = useSelector(getLoadingState);
  const handleAddProductToCart = (product) => dispatch(addToCart(product));
  
  return (
    <Grid2 container spacing={1}>
      {products.map((product, index) => (
        <Grid2 xs={"auto"} key={product._id + index}>
          <Product key={product._id + index} product={product} addToCart={handleAddProductToCart} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Products;
