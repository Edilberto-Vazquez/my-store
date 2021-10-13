const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middlewares/errorHandler');

const app = express();
const port = process.env.PORT || 3000;

// cors options
// const whiteList = ["http://127.0.0.1:5500"]

// const options = {
//   origin: (origin, callback) => {
//     if ((whiteList.indexOf(origin) !== -1) || !origin) {
//       callback(null, true)
//     } else {
//       callback(new Error("not allowed"))
//     }
//   }
// }

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello, my server in express');
});
routerApi(app);
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);
app.listen(port, () => {
  console.log('Mi port ' + port);
});
