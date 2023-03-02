import { isEmpty, isNull } from "lodash";
import { useEffect, useState } from "react";
import CardImg from "react-bootstrap/esm/CardImg";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../store/selectors/selectors";
import Comments from "../comments/comments";
import MetaData from "./components/metaData/metaData";

const Product = ({ product, color }) => {
  return (
    <>
      <CardImg src={product.color[color].img} />
      <MetaData product={product} />
      <Comments comments={product.comments} productId={product._id} />
    </>
  );
};

export default Product;
