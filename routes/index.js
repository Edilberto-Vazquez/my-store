const usersRouter = require('./usersRouter');
const productsRouter = require('./productsRouter');
const categoriesRouter = require('./categoriesRouter');

const routerApi = (app) => {
  app.use('/users', usersRouter);
  app.use('/products', productsRouter);
  app.use('/categories', categoriesRouter);
};

module.exports = routerApi;
