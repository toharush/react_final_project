import { Button, Divider, Typography } from "@mui/material";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import Quantity from "../../components/quantity/quantity";
import { addToCart } from "../../store/reducers/cart/cart";
import Comments from "../comments/comments";
import { ImageSlider } from "../productsList";
import MetaData from "./components/metaData/metaData";
import "./product.css";

const Product = ({
  product,
  chosenColor,
  setChosenColor,
  handleNewComment,
  rating,
  setRating,
}) => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        chosen: {
          chosenSize: chosenColor,
          chosenColor: chosenColor,
        },
      })
    );
  };

  return (
    <div className="product-page">
      <div className="product-page-details">
        <div className="product-page-image">
          <ImageSlider
            slides={product.color.map((color) => color)}
            className="product-page-image"
            currentIndex={chosenColor}
            setCurrentIndex={setChosenColor}
            link={null}
          />
          <MetaData product={product} />
        </div>
        <div className="product-text-details">
          <Typography variant="h5" dir="rtl">
            {product.name}
          </Typography>
          <Divider variant="fullWidth" />

          <div
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
            }}
          >
            <Quantity inputRef={inputRef} />
            <Typography>{product.price}$</Typography>
          </div>
          <div>
            <Button onClick={handleAddToCart}>Add To Cart</Button>
          </div>
        </div>
      </div>

      <Divider variant="middle" />
      <div className="comments">
        <Comments
          comments={product.comments}
          handleNewComment={handleNewComment}
          rating={rating}
          setRating={setRating}
        />
      </div>
    </div>
  );
};

export default Product;
