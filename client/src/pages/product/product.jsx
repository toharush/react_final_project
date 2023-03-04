import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../features/product/services/product";
import { default as ProductFeat } from "../../features/product";
import { isEmpty } from "lodash";
import { fetchNewComments } from "../../features/comments/services/comments";
import { useDispatch } from "react-redux";
import Loader from "../../components/loader/loader";

const Product = () => {
  const dispatch = useDispatch();
  const { id, color } = useParams();
  const [chosenColor, setChosenColor] = useState(Number(color));
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
  }, []);

  return data ? (
    <ProductFeat
      product={data}
      chosenColor={chosenColor}
      setChosenColor={setChosenColor}
      handleNewComment={handleNewComment}
      rating={rating}
      setRating={setRating}
      loading={loading}
    />
  ) : (
    <Loader />
  );
};

export default Product;
