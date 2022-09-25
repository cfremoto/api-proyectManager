require('dotenv').config()
const app = require('../index.js')
const db = require('./db.js')
require('colors')

app.listen(process.env.PORT, () => {
  console.log(`Server Online on port: ${process.env.PORT}`.bgYellow.blue.bold)

  db()
})
