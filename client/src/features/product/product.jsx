import { useEffect, useState } from "react";
import CardImg from "react-bootstrap/esm/CardImg";
import { useDispatch } from "react-redux";
import { useLoaderData, useParams } from "react-router-dom";
import { fetchProducts } from "../../store/reducers/products/products";
import MetaData from "./components/metaData/metaData";

const Product = () => {
  const dispatch = useDispatch();
  const products = useLoaderData("root");
  const { id } = useParams();
  const [color, setColor] = useState(
    products.filter((item) => item._id === id)[0].color[0]
  );

  useEffect(() => {
    dispatch(fetchProducts);
  }, []);

  return (
    <>
      <CardImg src={color.img} />
      <MetaData
        product={products.filter((item) => item._id === id)[0]}
        handleChosenColor={setColor}
      />
    </>
  );
};

export default Product;
