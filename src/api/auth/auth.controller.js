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

    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .send({ info: 'Operacion Exitosa' });
  },
};
