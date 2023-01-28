const { AddToCartDb } = require("../model/cart")

exports.AddToCart = async(productId, userId) => {
    return await AddToCartDb(productId, userId);
}