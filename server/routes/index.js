const Router =  require('express')
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const brandRouter = require('./brandRouter')
const sizeRouter = require('./sizeRouter')
const basketRoute = require('./basketRouter')
const orderRoute = require('./orderRouter')

const router = new Router()

router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/brand', brandRouter)
router.use('/size', sizeRouter)
router.use('/basket', basketRoute)
router.use('/order', orderRoute)


module.exports = router