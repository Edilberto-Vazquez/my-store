const boom = require('@hapi/boom');

const logErrors = (err, req, res, next) => {
  console.log('logErrors');
  console.error(err);
  next(err);
};

const errorHandler = (err, req, res, next) => {
  console.log('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
};

const boomErrorHandler = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
};

function queryErrorHandler(err, req, res, next) {
  if (err.parent) {
    const { fields, parent } = err;
    res.status(500).json({
      field: fields,
      message: parent.detail,
    });
  }
  next(err);
}

module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler,
  queryErrorHandler,
};
