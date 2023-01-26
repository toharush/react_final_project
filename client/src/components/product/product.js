import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/reducers/cart/cart";
import SliderChoser from "../sliderChoser/sliderChoser";
import "./product.css";

function Product({ product }) {
  const { name, supplier, price, img, size, color } = product;

  const dispatch = useDispatch();
  const [chosenSize, setChosenSize] = useState(size[0]);
  const [chosenColor, setChosenColor] = useState(color[0]);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        chosenSize: chosenSize,
        chosenColor: chosenColor,
      })
    );
  };

  return (
    <div className="el-wrapper">
      <div className="box-up">
        <img className="img" src={img} alt="" />
        <div className="img-info">
          <div className="info-inner">
            <span className="p-name">{name}</span>
            <span className="p-company">{supplier}</span>
          </div>
          <SliderChoser
            content={{
              title: "Available sizes",
              options: size,
              setChosen: setChosenSize,
              chosen: chosenSize,
              label: true,
            }}
          />
          <div className="second">
            <SliderChoser
              content={{
                title: "Available color",
                options: color,
                setChosen: setChosenColor,
                chosen: chosenColor,
                label: false,
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
