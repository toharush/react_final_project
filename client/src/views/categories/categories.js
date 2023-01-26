import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../store/middlewares/middleware";
import { selectProducts } from "../../store/selectors/selectors";

function Categories() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const products = useSelector(selectProducts);

  return <></>;
}

export default Categories;
