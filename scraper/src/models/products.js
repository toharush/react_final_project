const products = require("../schema/products");

exports.CreateNewProductDb = async (product) => {
  let res = {};
  try {
    console.log(product)
    res = await products.insertMany({
      price: product.price,
      supplier: product.supplier,
      name: product.name,
      color: product.color
    });
    console.log(res)
  } catch (err) {
    console.log(err);
  } finally {
    return res;
  }
};
