const express = require('express');
const app = express();
const port = 3000;
const routerApi = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/errorHandler');

routerApi(app);
app.use(express.json());
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// app.get('/', (req, res) => {
//   res.send('Hello, my server in express');
// });

// app.get('/new-route', (req, res) => {
//   res.send('Hello, i am a new rute');
// });

app.listen(port, () => {
  console.log('Mi port ' + port);
});
