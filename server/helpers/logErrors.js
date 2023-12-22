const logErrors = (err, req, res, next) => {
    console.error(err.stack, 'ERROR_STACK')
    next(err)
  }

  module.exports = logErrors