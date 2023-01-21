import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../../store/middlewares/middleware';
import { selectProducts, isLoading } from '../../store/selectors/selectors';
import Product from '../../components/product/product';
import Loader from '../../components/loader/loader';

function Products() {
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <>
      {
        loading ? <Loader /> : products.map(product => <Product product={product} key={product.id} />)
      }
    </>
  );
}

export default Products;