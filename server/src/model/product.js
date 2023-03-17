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
  try {
    return await products.findById(productId).exec().then(async (product) => {
      try {
        console.log(product);
        await (product.color[colorIndex].quantity[sizeIndex] -= amount);
        await products.findOneAndUpdate({_id: productId}, product);
        return product;
      } catch (error) {
        console.log(error);
      }
    })
  } catch (err) {
    console.log(err);
  }
};
