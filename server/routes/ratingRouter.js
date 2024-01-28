const Router = require('express')
const router = new Router()
const ratingController = require('../controllers/ratingController')


router.post('/', ratingController.create)
router.get('/', ratingController.get)
router.delete('/', ratingController.delete)

module.exports = router