const dto = require('../users/user.dto.js');
const utils = require('../../utils/auth.utils.js');

module.exports = {
  login: async (req, res) => {
    const data = req.body;

    const user = await dto.getOneuser({ email: data.email });
    if (!user) return res.status(400).send({ info: 'Datos incorrectos' });

    const match = await utils.matchPass(data.password, user.password);
    if (!match) return res.status(400).send({ info: 'Datos incorrectos' });

    const token = utils.generateToken({ user: user._id });

    const { password, ...other } = user._doc;

    const enviar = { ...other, token };

    res.status(200).send({ info: 'Operacion Exitosa', enviar });
  },

  getUser: async (req, res) => {
    const { user } = req.user;

    const userValidado = await dto.getUserById(user);
    if (!userValidado) return res.status(404).send({ info: 'El usuario no existe' });

    if (userValidado.message)
      return res.status(500).send({ info: 'Error interno, intente nuevamente' });

    res.status(200).send({ info: 'Operacion exitosa', userValidado });
  },
};
