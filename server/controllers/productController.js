const { Op } = require("sequelize");
const { Product, ProductSize, ProductInfo, Size } = require('../models')
const saveFile = require('../helpers/saveFile')

class ProductController {
    async create(req, res, next) {
        try {
            let { name, price, brandId, info } = req.body
            const { img } = req.files

            const fileName = saveFile(img)

            const product = await Product.create({ name, price, brandId, img: fileName })

            if (info) {   
                info = JSON.parse(info)

                await ProductInfo.create({
                    productId: product.id,
                    title: info.title, 
                    description: info.description
                })
            }

            return res.json(product)
        } catch(error) {
            next(error)
        }
    }

    async getAll(req, res, next) {
        const { limit = 9, page = 1, brands, rangePrice } = req.query

        const rangeList = rangePrice?.split(',')
        const brandList = brands?.split(',')

        let offset = page * limit - limit

        const whereOptions = {}

        if(brandList) {
            whereOptions.brandId = {
                [Op.or]: brandList 
            }
        }

        if(rangeList) {
            const [min, max] = rangeList

            if (Number(max) < Number(min)) {
                return next('неверно задан диапазон')
            }

            whereOptions.price = {
                [Op.between]: [min, max]
            }
        }

        try {
            const data = await Product.findAndCountAll({ limit, offset, where: whereOptions })

            return res.json(data) 
        } catch(error) {
            next(error)
        }      
    }

    async getOne(req, res, next) {
        try {
            const { id } = req.params

            const product = await Product.findOne({ 
                where: { id },
                include: [
                    {
                        model: ProductSize,
                        attributes: ['sizeId']
                    },
                    {
                        model: ProductInfo,
                        as: 'info'
                    }
                ]  
            })

            if (product.productSizes?.length) {
               const sizeIds = product.productSizes.map((i) => i.sizeId)  

               const sizes = await Size.findAll({
                    where: { id: { [Op.or]: sizeIds } }
                })

                return res.json({...product.toJSON(), sizes: sizes.map((i) => i.size) })
            }

            return res.json(product)
        } catch (error) {
           next(error)     
        }


    }
}



module.exports =  new ProductController()