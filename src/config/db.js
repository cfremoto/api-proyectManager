const mongoose = require('mongoose')
require('colors')

const connectDB = () => {
  mongoose.connect(process.env.MONGODB, () => {
    console.log(`DB is connected on host: ${mongoose.connection.host}`.bgGreen.yellow.bold)
  })

  mongoose.connection.on('disconnected', () => {
    console.log('MongoDb is disconnected'.bgRed.bold)
  })
}

module.exports = connectDB
