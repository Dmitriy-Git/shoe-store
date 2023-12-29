const logErrors = (err, req, res, next) => {
    console.error(err, 'ERROR_STACK')

    next(err)
  }

  module.exports = logErrors