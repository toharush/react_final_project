import { isEmpty, isNull } from "lodash";
import { useEffect, useState } from "react";
import CardImg from "react-bootstrap/esm/CardImg";
import MetaData from "./components/metaData/metaData";

const Product = ({ product, color }) => {
  return (
    <>
      <CardImg src={product.color[color].img} />
      <MetaData product={product} />
    </>
  );
};

export default Product;
