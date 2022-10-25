const express = require('express');
const router = express.Router({ "caseSensitive": false, "strict": false });
const indexController = require('../controllers/index');

// Homepage
router.get('/', indexController.getAllProducts);

// Product Detail
router.get('/product/:id', indexController.getProduct);

// Cart Page
router.get('/cart', indexController.getCart);

// Add to Cart
router.post('/addToCart', indexController.addToCart);

module.exports = router;