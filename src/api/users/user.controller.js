const dto = require('./user.dto.js');
const utils = require('../../utils/auth.utils.js');

module.exports = {
  getUsers: async (req, res) => {
    const users = await dto.getUsers();
    if (users.message)
      return res
        .status(404)
        .send({ info: 'Solicitud no procesada, intenta nuevamente' });

    res.status(200).send({ info: 'Solicitud exitosa', newUsers });
  },

  createUser: async (req, res) => {
    const data = req.body;

    const existe = await dto.getOneuser({ email: data.email });
    if (existe) return res.status(403).send({ info: 'El usuario ya existe' });

    data.password = await utils.hashPass(data.password);

    const newUser = await dto.createUser(data);
    if (newUser.message)
      return res.status(403).send({ info: 'No se pudo crear el usuario' });

    res.status(201).send({ info: 'Usuario Creado Correctamente' });
  },
};
