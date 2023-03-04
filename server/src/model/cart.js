const productsMetadata = require("../schemas/productsMetadata");
const cart = require("../schemas/cart");

exports.AddToCartDb = async (productId, userId) => {
  let res = {};
  try {
    res = await productsMetadata.find({
      productId: productId,
      userId: userId,
    });
    if (res.length == 0) {
      res = await productsMetadata.insertMany({
        productId: productId,
        userId: userId,
        buy: false,
      });
    }
  } catch (err) {
    console.log(err);
  } finally {
    return res;
  }
};

exports.Buy = () => {};

exports.syncCartToDb = async (userId, cartItems) => {
  return await cart.findOneAndUpdate(
    { userId: userId },
    {
      userId: userId,
      products: cartItems,
    },
    { upsert: true, new: true }
  );
};

exports.getCartFromDb = async (userId) => {
  return await cart.findOne({ userId: userId });
};
