import { isEmpty, isNull } from "lodash";
import { useEffect, useState } from "react";
import CardImg from "react-bootstrap/esm/CardImg";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useParams } from "react-router-dom";
import Loader from "../../components/loader/loader";
import useProducts from "../../hooks/useProducts";
import { fetchProducts } from "../../store/reducers/products/products";
import { selectProducts } from "../../store/selectors/selectors";
import MetaData from "./components/metaData/metaData";

const Product = () => {
  const products = useProducts();
  const { id, color } = useParams();

  return !isNull(products) ? (
    <>
      <CardImg
        src={products.filter((item) => item._id === id)[0].color[color].img}
      />
      <MetaData product={products.filter((item) => item._id === id)[0]} />
    </>
  ) : (
    <Loader />
  );
};

export default Product;
