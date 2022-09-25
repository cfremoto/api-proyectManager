require('colors')

module.exports = {
  success: (req, res, message, code) => {
    if (!code) code = 200
    if (!message) message = 'Operacion Exitosa!!!'
    res.status(code).send({
      success: true,
      error: '',
      body: message
    })
  },

  error: (req, res, message, code, details) => {
    console.log(`[error]: \n ${details.message} \n ${details.code} \n ${details.path}`.bgRed.white.bold)

    if (!code) code = 500
    if (!message) message = 'Error interno, algo esta mal'
    res.status(code).send({
      success: false,
      error: message,
      body: ''
    })
  }
}
