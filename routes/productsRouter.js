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
  const newProduct = service.create(body);
  res.status(201).json({
    data: newProduct,
  });
});

// patch method
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.json(product);
});

// delete method
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta = service.delete(id);
  res.json(rta);
});

module.exports = router;
