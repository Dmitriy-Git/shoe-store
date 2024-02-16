const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId: { type: DataTypes.INTEGER, allowNull: false, },
    productId: { type: DataTypes.INTEGER, allowNull: false, },
    size: { type: DataTypes.INTEGER, allowNull: false, }
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING},
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Size = sequelize.define('size', {
    id: {type: DataTypes.INTEGER, allowNull: false,  primaryKey: true, unique: true },
    size: { type: DataTypes.INTEGER, allowNull: false, unique: true }
})

const ProductSize = sequelize.define('productSize', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }
  });

const ProductInfo = sequelize.define('productInfo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING(1000), allowNull: false},
})  

const Order = sequelize.define('oder', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId: { type: DataTypes.INTEGER, allowNull: false, },
    comment: {type: DataTypes.STRING(1000) },
})

const OrderList = sequelize.define('oderList', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    productId: { type: DataTypes.INTEGER, allowNull: false, },
    orderId: { type: DataTypes.INTEGER, allowNull: false, },
    size: { type: DataTypes.INTEGER, allowNull: false, }
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    productId: { type: DataTypes.INTEGER, allowNull: false, },
    userId: { type: DataTypes.INTEGER, allowNull: false, },
    value: { type: DataTypes.INTEGER, allowNull: false },
})

User.hasMany(Order)
Order.belongsTo(User)

Product.hasMany(OrderList)
OrderList.belongsTo(Product)

Product.hasMany(Rating)
Rating.belongsTo(Product)

User.hasOne(Basket)
Basket.belongsTo(User)

Product.hasMany(Basket)
Basket.belongsTo(Product)

Brand.hasMany(Product)
Product.belongsTo(Brand)

// Many-to-Many Product and Size
Product.belongsToMany(Size, { through: ProductSize })
Size.belongsToMany(Product, { through: ProductSize })
ProductSize.belongsTo(Product);
ProductSize.belongsTo(Size);
Product.hasMany(ProductSize);
Product.hasMany(ProductSize);

Product.hasMany(ProductInfo, { as: 'info' })
ProductInfo.belongsTo(Product)

module.exports = {
    User,
    Product,
    Brand,
    Size,
    ProductSize,
    ProductInfo,
    Basket,
    Order,
    OrderList,
    Rating,
}