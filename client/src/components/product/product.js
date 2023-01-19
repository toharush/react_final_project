function Product({ product }) {
    const { name, supplier, price, img } = product;
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