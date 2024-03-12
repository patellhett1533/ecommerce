const express = require('express');
const { requireLogin, userMiddleware } = require('../common-middleware/index');
const { addItemToCart } = require('../controller/cart');
const router = express.Router();

router.post('/user/cart/addtocart', requireLogin, userMiddleware, addItemToCart);

module.exports = router;