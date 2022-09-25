// imports
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

//instancia de express
const app = express()

//middleware
app.use(express.json({limit: '50Mb'}))
app.use(express.urlencoded({extended: true, limit: '50Mb'}))
app.use(cookieParser())
app.use(cors())

//manejador de errores


//router


//export app
module.exports = app
