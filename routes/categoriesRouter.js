const express = require('express');
const router = express.Router();
const ProductsService = require("../services/productService")

const service = new ProductsService()

router.get('/', async (req, res) => {
  // const { categoryId, productId } = req.params;
  const categories = await service.find()
  res.json({categories});
});

router.get('/:categoryId/:price', async (req, res) => {
  const { categoryId, price } = req.params;
  const categories = await service.findCategory(categoryId, price)
  res.json({categories});
});

module.exports = router;
