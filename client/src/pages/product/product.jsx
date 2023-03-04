import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../features/product/services/product";
import { default as ProductFeat } from "../../features/product";
import { isEmpty, shuffle } from "lodash";
import { fetchNewComments } from "../../features/comments/services/comments";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/loader";
import { getProducts } from "../../store/selectors/selectors";
import ProductsList from "../../features/productsList/productsList";
import { fetchProducts } from "../../features/productsList";
import { ScrollRestoration } from "react-router-dom";

const Product = () => {
  const dispatch = useDispatch();
  const { id, color } = useParams();
  const [chosenColor, setChosenColor] = useState(Number(color));
  const products = useSelector(getProducts);
  const [rating, setRating] = useState(0);
  const [data, setData] = useState(null);
  const [loading, seLoading] = useState(false);

  const handleNewComment = async (comment, userId) => {
    if (!isEmpty(comment.current.value)) {
      await fetchNewComments(comment.current.value, rating, id, userId);
      await loadProduct();
      setRating(0);
      comment.current.value = "";
    }
  };

  const loadProduct = async () => {
    seLoading(true);
    const res = await setData(await fetchProduct(id, dispatch));
    seLoading(false);
    return res;
  };

  useEffect(() => {
    loadProduct();
    if (isEmpty(products)) {
      dispatch(fetchProducts());
    }
  }, [id]);

  return data ? (
    <>
      <ProductFeat
        product={data}
        chosenColor={chosenColor}
        setChosenColor={setChosenColor}
        handleNewComment={handleNewComment}
        rating={rating}
        setRating={setRating}
        loading={loading}
      />
      <h2 style={{ marginLeft: "4%", marginTop: "2%", marginBottom: "1%" }}>
        People also like:{" "}
      </h2>
      <ProductsList
        products={shuffle(
          products.filter(
            (listProduct) =>
              listProduct.categories.includes(...data.categories) &&
              listProduct._id != data._id
          )
        )}
      />
    </>
  ) : (
    <Loader />
  );
};

export default Product;
