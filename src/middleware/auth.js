const response = require('../config/response.js');
const auth = require('../utils/auth.utils.js');

const checkToken = (req, res, next) => {
  const token = req.headers['x-auth-token'];

  if (!token)
    response.error(req, res, { info: 'No estas autorizado' }, 403, 'No hay token');

  const decoder = auth.decoderToken(token);
  if (!decoder)
    response.error(req, res, { info: 'Token Invalido' }, 403, 'token invalido');

  req.user = decoder;
  next();
};

const checkUser = (req, res, next) => {
  checkToken(req, res, next),
    () => {
      req.user.id === req.params.id
        ? next()
        : response.error(req, res, { info: 'No estas Autorizado' }, 403, '');
    };
};

module.exports = {
  checkToken,
  checkUser,
};
