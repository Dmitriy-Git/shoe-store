const {Sequelize} = require('sequelize')


module.exports = new Sequelize('shoestore', 'postgres', 'd4443h2c', {
    host: 'localhost',
    dialect: 'postgres',
    port: '5432',
})