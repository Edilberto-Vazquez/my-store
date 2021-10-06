const express = require('express');
const app = express();
const port = 3000;
const routerApi = require('./routes');

// app.get('/', (req, res) => {
//   res.send('Hello, my server in express');
// });

// app.get('/new-route', (req, res) => {
//   res.send('Hello, i am a new rute');
// });

routerApi(app);

app.listen(port, () => {
  console.log('Mi port ' + port);
});
