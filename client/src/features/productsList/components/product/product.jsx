import "./product.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActions,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../imageSlider/imageSlider";
import "./product.css";
import AddToCartBtn from "../../../../components/addToCartBtn/addToCartBtn";

const Product = ({ product, addToCart }) => {
  const { name, color, supplier } = product;
  const [chosenColor, setChosenColor] = useState(0);
  const [chosenSize, setChosenSize] = useState(0);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      chosen: {
        chosenSize: chosenSize,
        chosenColor: chosenColor,
      },
    });
  };

  return (
    <Card className="product-card">
      <ImageSlider
        slides={color.map((color) => color)}
        className="product-img"
        currentIndex={chosenColor}
        setCurrentIndex={setChosenColor}
        link={`/${product._id}/${chosenColor}`}
      />
      <Link to={`/${product._id}/${chosenColor}`}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="name"
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {supplier}
          </Typography>
        </CardContent>
      </Link>
      <CardActions
        style={{
          width: "100%",
        }}
      >
        <Stack
          spacing={2}
          alignItems="center"
          style={{
            width: "100%",
          }}
        >
          <ToggleButtonGroup
            size="medium"
            value={chosenSize}
            exclusive
            onChange={(event, newValue) => setChosenSize(newValue)}
          >
            {color[chosenColor].size.map((size, index) =>
              color[chosenColor].quantity[index] > 0 ? (
                <ToggleButton value={index} key={product._id + size}>
                  {size}
                </ToggleButton>
              ) : null
            )}
          </ToggleButtonGroup>

          <AddToCartBtn handleClick={handleAddToCart} />
        </Stack>
      </CardActions>
    </Card>
  );
};

export default Product;
