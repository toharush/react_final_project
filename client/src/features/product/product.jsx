import { Button, Divider, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Quantity from "../../components/quantity/quantity";
import { syncCart } from "../../services/cart";
import { getCurrentUser, isAdmin } from "../../store/selectors/selectors";
import Comments from "../comments/comments";
import { FilterField } from "../filter";
import { ImageSlider } from "../productsList";
import MetaData from "./components/metaData/metaData";
import "./product.css";
import { getCartItems } from "../../store/selectors/cart/cart";

const Product = ({
  product,
  chosenColor,
  setChosenColor,
  handleNewComment,
  rating,
  setRating,
  loading,
}) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);
  const cart = useSelector(getCartItems);
  const admin = useSelector(isAdmin);
  const [chosenSize, setChosenSize] = useState(0);

  const handleAddToCart = () => {
    dispatch(
      syncCart({
        userId: user?.uid,
        cart: cart,
        quantity: 1,
        newProduct: {
          ...product,
          chosen: {
            chosenSize: chosenSize,
            chosenColor: chosenColor,
          },
        },
      })
    );
  };

  return (
    <div className="product-page" id="product-page">
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
          <Typography textSize="h1"> {product.name} </Typography>

          <Typography textSize="h6">
            {" "}
            {chosenSize >= 0
              ? product.color[chosenColor].quantity[chosenSize]
              : 0}{" "}
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
            <Quantity
              inputRef={inputRef}
              max={
                chosenSize >= 0
                  ? product.color[chosenColor].quantity[chosenSize]
                  : chosenSize
              }
            />
            <FilterField
              array={product.color[chosenColor].size}
              handleFilterBy={(event) =>
                setChosenSize(
                  product.color[chosenColor].size.indexOf(event.target.value)
                )
              }
              inputLabel="Choose Size"
              selectValue={product.color[chosenColor].size[chosenSize]}
            />
            <Typography textSize="h6">{`${product.price}$`}</Typography>
          </div>
          <div>
            <Button onClick={handleAddToCart}>Add To Cart</Button>
            {admin ? <Button onClick={handleAddToCart}>Update</Button> : null}
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
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Product;
