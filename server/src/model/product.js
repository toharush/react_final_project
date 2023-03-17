const products = require("../schemas/products");

exports.GetAllProductsFromDb = async () => {
  let res = [];

  try {
    res = await products.find({});
  } catch (err) {
    console.log(err);
  } finally {
    return res;
  }
};

exports.GetProductByIdFromDb = async (id) => {
  let res = {};

  try {
    res = await products.findById(id);
  } catch (err) {
    console.log(err);
  } finally {
    return res;
  }
};

exports.updateProductQuantity = async (
  productId,
  sizeIndex,
  colorIndex,
  amount
) => {
  let currProduct = {};

  try {
    currProduct = await products.findById(productId);
    const updatedProduct = {
      ...currProduct,
      color: [
        ...currProduct?.color.map((color, index) => {
          if (index === colorIndex) {
            return {
              ...color,
              quantity: [
                ...color?.quantity.map((qua, index) => {
                  if (index === sizeIndex) {
                    return qua - Number(amount);
                  }
                  return qua;
                }),
              ],
            };
          }
          return color;
        }),
      ],
    };
    console.log("updatedProduct", updatedProduct);

    return await products.findOneAndUpdate(
      { _id: productId },
      { ...updatedProduct }
    );
  } catch (err) {
    console.log(err);
  } finally {
    return currProduct;
  }
};
