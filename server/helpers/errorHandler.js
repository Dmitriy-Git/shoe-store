const errorHandler  = (err, req, res, next) => {
    if (err) res.status(400).json({ error: err })
    else res.status(500).json({ error: 'Непредвиденная ошибка!' })
  }

module.exports = errorHandler  