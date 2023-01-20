import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../../store/middlewares/middleware';
import { selectProducts, isLoading, getCurrentUser } from '../../store/selectors/selectors';

function Categories() {
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);

  useEffect(() => {
    dispatch(fetchAllProducts());
    
  }, []);

  const products = useSelector(selectProducts);

  return (
    <>

    </>
  );
}

export default Categories;