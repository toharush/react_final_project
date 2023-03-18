import { Divider, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { syncCart } from "../../services/cart";
import { getCurrentUser, isAdmin } from "../../store/selectors/selectors";
import { FilterField } from "../filter";
import { ImageSlider } from "../productsList";
import { getCartItems } from "../../store/selectors/cart/cart";
import Quantity from "../../components/quantity/quantity";
import Comments from "../comments/comments";
import MetaData from "./components/metaData/metaData";
import AddToCartBtn from "../../components/addToCartBtn/addToCartBtn";
import "./product.css";

const Product = ({
  product,
  chosenColor,
  setChosenColor,
  handleNewComment,
  rating,
  setRating,
  loading,
}) => {
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);
  const cart = useSelector(getCartItems);
  const admin = useSelector(isAdmin);
  const [quantity, setQuantity] = useState(0);
  const [chosenSize, setChosenSize] = useState(0);

  const handleAddToCart = () => {
    dispatch(
      syncCart({
        userId: user?.uid,
        cart: cart,
        quantity: Number(quantity),
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
          <div>
            <Typography className="product-name" textSize="h1">
              {product.name}
            </Typography>

            <Typography className="product-quantity" textSize="h6">
              {`מלאי: 
              ${
                chosenSize >= 0
                  ? product.color[chosenColor].quantity[chosenSize]
                  : 0
              }`}
            </Typography>
            <Typography
              textSize="h6"
              style={{ textAlign: "right", paddingTop: "5%" }}
            >{`מחיר: ${product.price}$`}</Typography>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row-reverse",
            }}
          >
            <Quantity
              style={{ margin: "8px 0px 8px 8px", width: "120px" }}
              quantity={quantity}
              setQuantity={setQuantity}
              max={
                chosenSize >= 0
                  ? product.color[chosenColor].quantity[chosenSize]
                  : chosenSize
              }
            />
            <FilterField
              style={{ with: "100px" }}
              array={product.color[chosenColor].size}
              handleFilterBy={(event) =>
                setChosenSize(
                  product.color[chosenColor].size.indexOf(event.target.value)
                )
              }
              inputLabel="Choose Size"
              selectValue={product.color[chosenColor].size[chosenSize]}
            />
          </div>
          <AddToCartBtn handleClick={handleAddToCart} />
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
