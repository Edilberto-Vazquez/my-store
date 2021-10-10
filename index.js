const express = require('express');
const cors = require("cors")
const app = express();
const port = 3000;
const routerApi = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/errorHandler');

const whiteList = ["http://127.0.0.1:5500"]

const options = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("not allowed"))
    }
  }
}

app.use(express.json());
app.use(cors(options))
routerApi(app);
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
