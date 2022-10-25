const helper = require('../util/helper');

const products = [
    { id: 1, name: "Product 1", price: 15.50, image: "https://via.placeholder.com/200?text=Product+1", detail: 'Product 1 = Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 2, name: "Product 2", price: 10.00, image: "https://via.placeholder.com/200?text=Product+2", detail: 'Product 2 = Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 3, name: "Product 3", price: 25.00, image: "https://via.placeholder.com/200?text=Product+3", detail: 'Product 3 = Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 4, name: "Product 4", price: 70.78, image: "https://via.placeholder.com/200?text=Product+4", detail: 'Product 4 = Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 5, name: "Product 5", price: 95.50, image: "https://via.placeholder.com/200?text=Product+5", detail: 'Product 5 = Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 6, name: "Product 6", price: 33.99, image: "https://via.placeholder.com/200?text=Product+6", detail: 'Product 6 = Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 7, name: "Product 7", price: 47.95, image: "https://via.placeholder.com/200?text=Product+7", detail: 'Product 7 = Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 8, name: "Product 8", price: 83.50, image: "https://via.placeholder.com/200?text=Product+8", detail: 'Product 8 = Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
];

function getProduct(id) {
    let filter = products.filter((e) => e.id === parseInt(id));
    return (filter.length === 1) ? filter[0] : [];
}

exports.getAllProducts = (req, res, next) => {
    res.render('shop', {
        products: products,
        pageTitle: 'Shop',
        bootstrapCDN: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css',
        jqueryCDN: 'https://code.jquery.com/jquery-3.6.0.min.js',
        faCDN: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css',
    });
};

exports.getProduct = (req, res, next) => {
    let product = getProduct(req.params.id);

    if (product.length === 0) res.redirect("/");

    res.render('product', {
        pageTitle: `${product.name} - Detail`,
        product: product,
        homePagePath: '/',
        addToCart: "/addToCart",
        bootstrapCDN: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css',
        jqueryCDN: 'https://code.jquery.com/jquery-3.6.0.min.js',
        faCDN: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css',
    });
};

exports.addToCart = (req, res, next) => {

    if (req.session.cart[req.body.name] !== undefined) {
        req.session.cart[req.body.name]['quantity'] += 1;
    } else {
        req.session.cart[req.body.name] = {
            name: req.body.name,
            quantity: 1,
            price: req.body.price
        };
    }

    res.status(200).json({ cartTotal: helper.getCartDetail(req).itemTotal });
    res.end();
};

exports.getCart = (req, res, next) => {
    res.render('shoppingcart', {
        pageTitle: `Cart`,
        cartData: req.session.cart,
        cartTotal: helper.getCartDetail(req).total,
        totalItem: helper.getCartDetail(req).itemTotal,
        homePagePath: '/',
        bootstrapCDN: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css',
        jqueryCDN: 'https://code.jquery.com/jquery-3.6.0.min.js',
        faCDN: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css',
    });
};