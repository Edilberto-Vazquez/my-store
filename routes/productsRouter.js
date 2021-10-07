const express = require('express');
const router = express.Router();
const faker = require('faker');

// method to get products
router.get('/', (req, res) => {
  const { size } = req.query;
  const limit = size || 10;
  const products = [];

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }

  res.json(products);
});

// put specific endpoints before dynamic endpoints
router.get('/filter', (req, res) => {
  res.send('i am a filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (id === '999') {
    res.status(404).json({
      message: 'not found',
    });
  } else {
    res.status(200).json({
      id,
      name: 'Product 5',
      price: 400,
    });
  }
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
