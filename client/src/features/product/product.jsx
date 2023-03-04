import { Button, Divider, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminEditAbleValue from "../../components/adminEditAbleValue/adminEditAbleValue";
import Quantity from "../../components/quantity/quantity";
import { addToCart } from "../../store/reducers/cart/cart";
import { isAdmin } from "../../store/selectors/selectors";
import Comments from "../comments/comments";
import { FilterField } from "../filter";
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
  loading,
}) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const admin = useSelector(isAdmin);
  const [chosenSize, setChosenSize] = useState(0);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        chosen: {
          chosenSize: chosenSize,
          chosenColor: chosenColor,
        },
      })
    );
  };

  useEffect(() => {
    console.log(chosenSize)
  }, [chosenSize])

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
          <AdminEditAbleValue
            value={product.name}
            textSize="h3"
            admin={Boolean(admin)}
            sx={{}}
            setValue={() => {}}
          />

          <AdminEditAbleValue
            value={
              chosenSize >= 0
                ? product.color[chosenColor].quantity[chosenSize]
                : 0
            }
            admin={Boolean(admin)}
            textSize="h6"
            setValue={() => {}}
          />

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
            <AdminEditAbleValue
              value={`${product.price}$`}
              admin={Boolean(admin)}
              textSize="h6"
              setValue={() => {}}
            />
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
