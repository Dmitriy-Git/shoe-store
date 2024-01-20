const { Order, OrderList, Product } = require('../models')


class OrderController {
    async create(req, res, next) {
        const { userId, productIds, comment } = req.body

        try {
            const order = await Order.create({ userId, comment })

            const result = productIds.split(',').map((productId) => ({ productId, orderId: order.id }))

            await OrderList.bulkCreate(result)

            return res.json('success')
        } catch(e) {
            next(e)
        }
    }

    async get(req, res, next) {
        const { userId } = req.query

        try {
            const orders = await Order.findAll({ where: { userId }, attributes: ['id'] })

            const orderIds = orders.map((i) => i.id)

            const orderList = await OrderList.findAll({ where: {orderId : orderIds }, include: [{ model: Product, required: true }] })

            const result = orderList.reduce((acc, i) => {
                if(!acc[i.orderId]) acc[i.orderId] = [i]
                else acc[i.orderId].push(i) 

                return acc
            }, {})

            return res.json(result)
        } catch(e) {
            next(e)
        }
    }

    async delete(req, res, next) {
        const { orderId } = req.body

        try {
            await Order.destroy({ where: { id: orderId } });

            await OrderList.destroy({ where: { orderId } });

            return res.json('success')
        } catch(e) {
            next(e)
        }
    }
}


module.exports =  new OrderController()