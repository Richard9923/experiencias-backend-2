const express = require('express');
const router = express.Router();
const {getProducts, updateProduct, getProduct, createProduct, deleteProduct} = require("../controller/productController");

router.get('/', getProducts);
router.post('/', createProduct);
router.get('/:id', getProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router