const errorHandler  = (err, req, res, next) => {
    res.status(500).json({ error: 'Непредвиденная ошибка!' })
    res.json({ error: err })
  }

module.exports = errorHandler  