const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, my server in express');
});

app.get('/new-route', (req, res) => {
  res.send('Hello, i am a new rute');
});

app.get('/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 305,
  });
});

app.listen(port, () => {
  console.log('Mi port ' + port);
});
