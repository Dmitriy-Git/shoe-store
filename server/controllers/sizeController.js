const { Size } = require("../models")

class SizeController {
    create(req, res, next) {
        const { size, id } = req.body

        return Size.create({ size, id })
                .then((data) => res.json(data))
                .catch(next)
    }

    getAll(req, res, next) {
        return Size.findAll()
                .then((data) => res.json(data))
                .catch(next)
    }
}

module.exports = new SizeController()