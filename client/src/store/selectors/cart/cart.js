export const getCartItems = (state) => state.cart.items;
export const getTotalPrice = (state) => {
  let price = 0;
  state.cart.items.map(
    (product) => (price += product.price * product.quantity)
  );
  return price;
};

export const getItemPrice = (state) => {
  let price = 0;
  state.cart.items.map((product) => (price += product.price));
  return price;
};
