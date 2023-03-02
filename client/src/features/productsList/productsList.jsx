import Product from "./components/product/product";
import Grid2 from "@mui/material/Unstable_Grid2";
import {
  selectProductsWithFilter,
} from "../../store/selectors/selectors";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/reducers/cart/cart";
import Loader from "../../components/loader/loader";


const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsWithFilter);
  const handleAddProductToCart = (product) => dispatch(addToCart(product));

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
