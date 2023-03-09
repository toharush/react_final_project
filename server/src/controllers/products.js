const { GetAllProductsFromDb, GetProductByIdFromDb, updateProductQuantity } = require("../model/product");

exports.GetAllProducts = async () => {
  return await GetAllProductsFromDb();
};

exports.GetProductById = async (id) => {
  return await GetProductByIdFromDb(id);
};

exports.GetAllProductsWebSocket = async (ws) => {
  await setInterval(async () => await ws.send(await GetAllProductsFromDb()), 1000);
};

exports.updateProducts = async (productsToUpdate) => {
  let updatedProducts = [];

  for (let index = 0; index < productsToUpdate.length; index++) {
    let currProduct = productsToUpdate[index];
    let updatedProduct = await updateProductQuantity(currProduct.productId, currProduct.size, currProduct.color, currProduct.quantity);
    updatedProducts.push(updatedProduct);
  }

  return updatedProducts;
}