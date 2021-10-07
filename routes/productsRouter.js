const express = require('express');
const router = express.Router();
const ProductsService = require('../services/productService.js');

const service = new ProductsService();

// method to get products
router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

// put specific endpoints before dynamic endpoints
router.get('/filter', (req, res) => {
  res.send('i am a filter');
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

// post method
router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json({
    data: newProduct,
  });
});

// patch method
router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

// delete method
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

module.exports = router;
