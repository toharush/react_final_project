import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddToCartServer } from "../../store/middlewares/cart/cart";
import { addToCart } from "../../store/reducers/cart/cart";
import { getCurrentUser } from "../../store/selectors/selectors";
import SliderChoser from "../sliderChoser/sliderChoser";
import "./product.css";

function Product({ product }) {
  const [chosenColor, setChosenColor] = useState(0);
  const { name, supplier, price, color } = product;

  const dispatch = useDispatch();
  // const [chosenSize, setChosenSize] = useState(size[0]);


  const handleAddToCart = () => {
    dispatch(
      AddToCartServer({
        ...product,
        // chosenSize: chosenSize,
        chosenColor: chosenColor,
      })
    );
  };
console.log(color)
  return (
    <div className="el-wrapper">
      <div className="box-up">
        <img className="img" src={color[chosenColor]?.img} alt="" />
        <div className="img-info">
          <div className="info-inner">
            <span className="p-name">{name}</span>
            <span className="p-company">{supplier}</span>
          </div>
          {/* <SliderChoser
            content={{
              title: "Available sizes",
              options: size,
              setChosen: setChosenSize,
              chosen: chosenSize,
              label: true,
            }}
          /> */}
          <div className="second">
            <SliderChoser
              content={{
                title: "Available color",
                options: color,
                setChosen: setChosenColor,
                chosen: color[chosenColor],
                label: true,
              }}
            />
          </div>
        </div>
      </div>

      <div className="box-down">
        <div className="h-bg">
          <div className="h-bg-inner"></div>
        </div>

        <a className="cart">
          <span className="price">${price}</span>
          <span className="add-to-cart">
            <span className="txt" onClick={handleAddToCart}>
              Add to cart
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Product;
