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

exports.updateProductQuantity = async (productId, sizeIndex, colorIndex, amount) => {
  let currProduct = {};

  try {
    currProduct = await products.findById(productId);
    currProduct?.color[colorIndex]?.quantity[sizeIndex] -= amount;
    return await products.findOneAndReplace(
      {_id: productId},
      {...currProduct}
    );
  } catch (err) {
    console.log(err);
  } finally {
    return currProduct;
  }  
};