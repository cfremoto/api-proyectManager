const dto = require('./proyecto.dto.js');

module.exports = {
  getProyectos: async (req, res) => {
    const data = req.user.user;

    const proyectos = await dto.getProyectos({ autor: data });
    if (proyectos.message)
      return res
        .status(404)
        .send({ info: 'Solicitud no procesada, intenta nuevamente' });

    res.status(200).send({ info: 'Busqueda satisfactoria', proyectos });
  },

  createProyecto: async (req, res) => {
    const data = req.body;
    data.autor = req.user.user;

    const newProyecto = await dto.createProyecto(data);
    if (newProyecto.message)
      return res
        .status(404)
        .send({ info: 'Solicitud no procesada, intenta nuevamente' });

    res
      .status(201)
      .send({ info: 'Proyecto creado satisfactoriamente', newProyecto });
  },

  updateProyecto: async (req, res) => {},
};
