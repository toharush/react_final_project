import CardImg from "react-bootstrap/esm/CardImg";
import Comments from "../comments/comments";
import MetaData from "./components/metaData/metaData";

const Product = ({ product, color, handleNewComment }) => {
  return (
    <>
      <CardImg src={product.color[color].img} />
      <MetaData product={product} />
      <Comments comments={product.comments} handleNewComment={handleNewComment} />
    </>
  );
};

export default Product;
