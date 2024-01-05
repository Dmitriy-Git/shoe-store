const { Op } = require("sequelize");
const { Basket, Product } = require('../models')

class BasketController {
    async create(req, res, next) {
        const { userId, productId } = req.body
        
        try {
            await Basket.create({ userId, productId })

            const data = await Basket.findAll({ where: { userId } })

            const productIds = data.map((i) => i.productId)

            const products = await Product.findAll({ where: { id: { [Op.in]: productIds } } } )

            return res.json({ productIds, products })
        } catch(e) {
            next(e)
        }
    }

    async delete(req, res, next) {
        const { userId, productId } = req.body

        try {
            await Basket.destroy({ where: { userId, productId } })

            const data = await Basket.findAll({ where: { userId } })

            const productIds = data.map((i) => i.productId)

            const products = await Product.findAll({ where: { id: { [Op.in]: productIds } } } )

            return res.json({ productIds, products })
        } catch(e) {
            next(e)
        }
    }

    async getAll(req, res, next) {
        const { userId } = req.query

        if(!userId) next('userId - обязательный параметр')

        try {
            const data = await Basket.findAll({ where: { userId } })

            const productIds = data.map((i) => i.productId)

            const products = await Product.findAll({ where: { id: { [Op.in]: productIds } } } )

            return res.json({ productIds, products })
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new BasketController()