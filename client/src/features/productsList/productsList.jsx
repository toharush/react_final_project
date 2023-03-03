import Product from "./components/product/product";
import Grid2 from "@mui/material/Unstable_Grid2";
import {
  selectProductsErrors,
  selectProductsWithFilter,
} from "../../store/selectors/selectors";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/reducers/cart/cart";
import Loader from "../../components/loader/loader";
import { Alert } from "@mui/material";

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsWithFilter);
  const error = useSelector(selectProductsErrors);
  const handleAddProductToCart = (product) => addToCart(product);

  return products ? (
    <>
      <Grid2 container spacing={1} justifyContent="center">
        {products.map((product, index) => (
          <Grid2 xs={"auto"} key={product._id + index}>
            <Product
              key={product._id + index}
              product={product}
              addToCart={handleAddProductToCart}
            />
          </Grid2>
        ))}
      </Grid2>
    </>
  ) : (
    <Loader />
  );
};

export default ProductsList;
