const { Op } = require("sequelize");
const { Basket, Product, } = require('../models')

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
        const { userId, productId } = req.body

        try {
            await Basket.destroy({ where: { userId, productId } })

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
    const data = await Basket.findAll({ where: { userId } })

    const productIds = data.map((i) => i.productId)
    const products = await Product.findAll({ where: { id: { [Op.in]: productIds } } } )

    const response = preparedResponse(data, products)

    return res.json(response)
}

function preparedResponse(data, products) {
    const result = {}

    data.forEach((i) => {
        const { productId, size } = i

        if(result[productId]) {
            result[productId] = { count: result[productId].count + 1, sizes: [...result[productId].sizes, size] }
        } else {
            result[productId] = { count: 1, sizes: [size] }
        }
    })

    products.forEach((product) => {
        result[product.id].product = product.toJSON()
    })

    return Object.values(result)
}

module.exports = new BasketController()