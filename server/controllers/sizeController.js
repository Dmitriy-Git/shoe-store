const { Size } = require("../models")

class SizeController {
    create(req, res, next) {
        const { size } = req.body

        return Size.create({ size })
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