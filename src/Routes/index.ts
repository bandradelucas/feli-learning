const ProductController = require ('../Controllers/ProductController');
const router = require('express').Router();

router.get('/products', ProductController.index);

module.exports = router;
