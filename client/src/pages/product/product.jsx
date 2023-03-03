import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../features/product/services/product";
import { default as ProductFeat } from "../../features/product";
import { isEmpty } from "lodash";
import { fetchNewComments } from "../../features/comments/services/comments";

const Product = () => {
  const { id, color } = useParams();
  const [data, setData] = useState(null);

  const handleNewComment = async (comment) => {
    if (!isEmpty(comment.current.value)) {
      await fetchNewComments(comment.current.value, id);
      await loadProduct();
      comment.current.value = "";
    }
  };

  const loadProduct = async () => {
    return await setData(await fetchProduct(id));
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return data ? (
    <ProductFeat
      product={data}
      color={color}
      handleNewComment={handleNewComment}
    />
  ) : null;
};

export default Product;
