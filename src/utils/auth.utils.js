const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {

  hashPass: async (password) => {
    const salt = await bcrypt.genSalt()
    return bcrypt.hash(password, salt)
  },

  matchPass: (passwordHash, password) => {
    return bcrypt.compare(passwordHash, password)
  },

  generateToken: (data) => {
    return jwt.sign(data, process.env.JWT_SECRET, {expiresIn: '1h'})
  },

  decoderToken: (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
  }

}
