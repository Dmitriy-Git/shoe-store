const { Basket } = require('../models')

class BasketController {
    create(req, res, next) {
        const { userId, productId } = req.body

        return Basket.create({ userId, productId })
                .then((data) => res.json(data))
                .catch(next)
    }

    delete(req, res, next) {
        const { userId, productId } = req.body

        return Basket.destroy({ where: { userId, productId } })
                .then((data) => res.json(data))
                .catch(next)
    }

    getAll(req, res, next) {
        const { userId } = req.query

        return Basket.findAll({ where: { userId } })
                .then((data) => res.json(data))
                .catch(next)
    }
}

module.exports = new BasketController()