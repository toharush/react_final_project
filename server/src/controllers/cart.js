const { AddToCartDb, syncCartToDb, getCartFromDb } = require("../model/cart")

exports.AddToCart = async(productId, userId) => {
    return await AddToCartDb(productId, userId);
}

exports.syncCart = async(userId, cartItems) => {
    return await syncCartToDb(userId, cartItems);
}

exports.getCart = async(userId) => {
    return await getCartFromDb(userId);
}