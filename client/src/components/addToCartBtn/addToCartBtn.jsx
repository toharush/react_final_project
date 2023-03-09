import "./addToCartBtn.css";

const AddToCartBtn = ({ handleClick }) => {
  const handleOnClick = (event) => {
    event.currentTarget.classList.toggle("clicked");
    handleClick();
  }
  return (
    <button class="custom-button cart-button" onClick={handleOnClick}>
      <span class="add-to-cart">Add to cart</span>
      <span class="added">Added</span>
      <i class="fas fa-shopping-cart"></i>
      <i class="fas fa-box"></i>
    </button>
  );
};

export default AddToCartBtn;
