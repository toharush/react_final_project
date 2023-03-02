const products = require("../schema/products");

exports.CreateNewProductDb = async (product) => {
  let res = {};
  try {
    res = await products.insertMany({
      price: product.price,
      supplier: product.supplier,
      name: product.name,
      color: product.color,
    });
  } catch (err) {
    console.log(err);
  } finally {
    return res;
  }
};
