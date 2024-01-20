const { Op } = require("sequelize");
const { Basket, Product, Brand } = require('../models')

class BasketController {
    async create(req, res, next) {
        const { userId, productId, size } = req.body
        
        try {
            await Basket.create({ userId, productId, size })

            return getResponse(res, userId)
        } catch(e) {
            next(e)
        }
    }

    async delete(req, res, next) {
        const { userId, id } = req.body

        try {
            await Basket.destroy({ where: { userId, id } })

            return getResponse(res, userId)
        } catch(e) {
            next(e)
        }
    }

    async deleteAll(req, res, next) {
        const { userId, ids } = req.body

        try {
            await Basket.destroy({ where: { userId, id: ids } })

            return getResponse(res, userId)
        } catch(e) {
            next(e)
        }
    }

    async getAll(req, res, next) {
        const { userId } = req.query

        if(!userId) next('userId - обязательный параметр')

        try {
            return getResponse(res, userId)
        } catch (e) {
            next(e)
        }
    }
}

async function getResponse(res, userId) {
    const data = await Basket.findAll({ 
        where: { userId }, 
        include: [{ model: Product, required: true, include: [{ model: Brand, required: true }]}] 
    })

    const result = data.map((i) => {
        const { id, productId, size, product } = i

        return {
            id,
            size,
            productId,
            img: product.img,
            name: product.name, 
            price: product.price,
            brand: product.brand.name,
        }
    })

    return res.json(result)
}

module.exports = new BasketController()