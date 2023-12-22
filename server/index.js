require('dotenv').config()
const express = require('express')
const fileUpload = require('express-fileupload');
const sequelize = require('./db')
const models = require('./models')
const router = require('./routes')
const cors = require('cors')
const path = require('path')
const logErrors = require('./helpers/logErrors')
const errorHandler =  require('./helpers/errorHandler')

const app = express()
const PORT = process.env.PORT || 5000


app.use(express.json())
app.use(fileUpload())
app.use(cors())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/api', router)
app.use(logErrors)
app.use(errorHandler)

const start = async () => {
    try {
      await sequelize.authenticate();
      await sequelize.sync()

      app.listen(PORT, () => {
        console.log(`Сервер запущен на ${PORT}`)
      })
    } catch (e) {
       console.log(e) 
    }
}

start()