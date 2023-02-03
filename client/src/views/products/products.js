import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../store/middlewares/middleware";
import { selectProducts, isLoading, selectProductsWithFilter } from "../../store/selectors/selectors";
import Product from "../../components/product/product";
import Loader from "../../components/loader/loader";
import "./products.css";
import FilterBy from "../../components/filterBy/filterBy";

function Products() {
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const products = useSelector(selectProductsWithFilter);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <div className="products">
      <FilterBy />
      {loading ? (
        <Loader />
      ) : (
        products.map((product) => (
          <Product product={product} key={product._id} />
        ))
      )}
    </div>
  );
}

export default Products;
