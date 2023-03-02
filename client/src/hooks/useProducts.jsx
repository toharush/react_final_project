import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { singletonHook } from "react-singleton-hook";
import { fetchProducts } from "../store/reducers/products/products";
import { selectProducts } from "../store/selectors/selectors";

const init = null;

const useProducts = () => {
//   const dispatch = useDispatch();
//   const products = useSelector(selectProducts);

//   useEffect(() => dispatch(fetchProducts()), [products]);

  return null;
};

export default useProducts;
