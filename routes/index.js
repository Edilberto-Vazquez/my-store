const express = require('express');
const usersRouter = require('./usersRouter');
const productsRouter = require('./productsRouter');
const categoriesRouter = require('./categoriesRouter');

const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
};

module.exports = routerApi;
