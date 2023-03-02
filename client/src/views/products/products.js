import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../store/middlewares/middleware";
import {
  selectProducts,
  isLoading,
  selectProductsWithFilter,
  getAllAvilableColors,
  getAllAvilableSizes,
} from "../../store/selectors/selectors";
import Product from "../../components/product/product";
import Loader from "../../components/loader/loader";
import "./products.css";
import FilterBy from "../../components/filterBy/filterBy";
import { setFilter, setSearch } from "../../store/reducers/products/products";
import { MDBInput } from "mdb-react-ui-kit";

function Products() {
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const products = useSelector(selectProductsWithFilter);
  const colors = useSelector(getAllAvilableColors);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <>
      <div className="filter float-child">
        <FilterBy />
      </div>

      <div className="products float-child">
        {loading ? (
          <Loader />
        ) : (
          products.map((product) => (
            <Product product={product} key={product._id} />
          ))
        )}
      </div>
    </>
  );
}

export default Products;
