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
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING},
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Size = sequelize.define('size', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
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
}