module.exports.getCartDetail = function (request) {
    let total = 0, itemTotal = 0;

    for (key in request.session.cart) {
        total += (request.session.cart[key].quantity * request.session.cart[key].price);
        itemTotal += request.session.cart[key].quantity;
    }

    return { total: total, itemTotal: itemTotal };
}

