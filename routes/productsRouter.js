const express = require('express');
const router = express.Router();
const ProductsService = require('../services/productService.js');

const service = new ProductsService();

// method to get products
router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

// put specific endpoints before dynamic endpoints
router.get('/filter', (req, res) => {
  res.send('i am a filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});

// post method
router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body,
  });
});

// patch method
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'created',
    data: body,
    id,
  });
});

// delete method
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'delete',
    id,
  });
});

module.exports = router;
