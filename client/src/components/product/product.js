import { useDispatch } from "react-redux";
import { addToCart } from "../../store/reducers/cart/cart";
import SliderChoser from "../sliderChoser/sliderChoser";
import "./product.css"

function Product({ product }) {
  const dispatch = useDispatch();
  const { name, supplier, price, img, size, color } = product;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  }

  return (
    <div className="el-wrapper">
      <div className="box-up">
        <img className="img" src={img} alt="" />
        <div className="img-info">
          <div className="info-inner">
            <span className="p-name">{name}</span>
            <span className="p-company">{supplier}</span>
          </div>
          <SliderChoser content={{ title: "Available sizes", options: size, setChosen: {}, chosen: {} }} />
          <div className="second">
            <SliderChoser content={{ title: "Available color", options: color, setChosen: {}, chosen: {} }} />
          </div>

        </div>
      </div>

      <div className="box-down">
        <div className="h-bg">
          <div className="h-bg-inner"></div>
        </div>

        <a className="cart" href="#">
          <span className="price">${price}</span>
          <span className="add-to-cart">
            <span className="txt" onClick={handleAddToCart}>Add to cart</span>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Product;