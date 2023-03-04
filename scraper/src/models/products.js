const products = require("../schema/products");

exports.CreateNewProductDb = async (product, categories) => {
  console.log(product);
  let res = {};
  try {
    res = await products.findOneAndUpdate(
      { name: product.name },
      {
        price: product.price,
        supplier: product.supplier,
        name: product.name,
        categories: categories,
        color: product.color.map(color => ({...color, quantity: [...color.size.map(quantity => Math.floor(Math.random() * 51))] })),
      },
      { upsert: true, new: true }
    );
  } catch (err) {
    console.log(err);
  } finally {
    return res;
  }
};
