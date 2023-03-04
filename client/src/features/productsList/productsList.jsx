import Product from "./components/product/product";
import Grid2 from "@mui/material/Unstable_Grid2";
import {
  getCurrentUser,
  selectProductsWithFilter,
} from "../../store/selectors/selectors";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/reducers/cart/cart";
import Loader from "../../components/loader/loader";
import { getCartItems } from "../../store/selectors/cart/cart";
import { syncCart } from "../../services/cart";

const ProductsList = ({ products }) => {
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);
  const cart = useSelector(getCartItems);
  
  const handleAddProductToCart = (product) => {
    console.log(product);
    dispatch(
      syncCart({
        userId: user?.uid,
        quantity: 1,
        cart: cart,
        newProduct: product,
      })
    );
  };

  return products ? (
    <>
      <Grid2
        container
        spacing={1}
        justifyContent="center"
        sx={{
          "--Grid-rowSpacing": "0px",
          "--Grid-columnSpacing": "0px",
        }}
      >
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
