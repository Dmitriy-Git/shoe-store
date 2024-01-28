const { Rating } = require('../models')

class RatingController {
    async create(req, res, next) {
        try {
            let { productId, value, userId } = req.body

            if( value > 5 || value  < 0 ) return next('значение рейтинга от 0 до 5')

            const rating = await Rating.create({ productId, value, userId })

            return res.json(rating)
        } catch(error) {
            next(error)
        }
    }

    async get(req, res, next) {
        try {
            const { productId, userId } = req.query

            const ratings = await Rating.findAll({ where: { productId, userId } })

            if (!ratings.length) return res.json(0)

            const result = ratings.reduce((acc, i) => acc + i.value, 0)

            return res.json((result / ratings.length).toFixed(2))
        } catch(e) {
            next(e)
        }
    }

    async delete(req, res, next) {
        try {
            const { userId, productId } = req.body

            await Rating.destroy({ where: { userId, productId } }) 

            return res.json('success')
        } catch(e) {
            next(e)
        }
    }
}



module.exports =  new RatingController()