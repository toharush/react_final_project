import { connect } from "react-redux";

function Product({ product }) {
    const { id, name, supplier, price, img } = product;
    return (
      <div>
        <h1>{name}</h1>
        <span>{supplier} </span>
        <span>{price}$</span>
        <img src={img} />
      </div>
    );
}
  
export default Product;