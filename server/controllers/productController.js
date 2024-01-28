const { Op } = require("sequelize");
const { Product, ProductSize, ProductInfo, Size, Rating } = require('../models')
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
        const { limit = 9, page = 1, brands, rangePrice, sortByPrice, sizes } = req.query

        const rangeList = rangePrice ? rangePrice.split(',') : ''
        const brandList = brands ? brands.split(',') : ''

        let offset = page * limit - limit

        const whereOptions = {}
        const orderOptions = []
        const includeOption = []

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

        if(sortByPrice) {
            orderOptions.push(['price', sortByPrice === 'asc' ? 'ASC' : 'DESC'])
        }

        if(sizes) {
            includeOption.push({ model: ProductSize, required: true, where: { 'sizeId': sizes.split(',') } })
        }

        try {
            const data = await Product.findAndCountAll({ 
                limit, 
                offset, 
                where: whereOptions, 
                order: orderOptions, 
                include: includeOption,
                distinct: true,
            })

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
                    },
                    {
                        model: Rating,
                        attributes: ['value']
                    }
                ]  
            })

            const ratingSum = product.ratings?.reduce((acc, i) => acc + i.value, 0)
            const ratings = (ratingSum / product.ratings?.length).toFixed(2) || 0

            if (product?.productSizes?.length) {
                const sizeIds = product.productSizes.map((i) => i.sizeId)  

                const sizes = await Size.findAll({
                    where: { id: { [Op.or]: sizeIds } }
                })

                return res.json({ ...product.toJSON(), sizes: sizes.map((i) => ({ id: i.id, size: i.size })), ratings })
            }

            return res.json({ ...product.toJSON(), ratings })
        } catch (error) {
           next(error)     
        }


    }
}



module.exports =  new ProductController()