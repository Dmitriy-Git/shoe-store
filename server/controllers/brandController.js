const { Brand } = require("../models")

class BrandController {
    create(req, res, next) {
        const { name } = req.body

        return Brand.create({ name })
                .then((data) => res.json(data))
                .catch(next)
    }

    getAll(req, res, next) {
        return Brand.findAll()
                .then((data) => res.json(data))
                .catch(next)
    }
}

module.exports = new BrandController()