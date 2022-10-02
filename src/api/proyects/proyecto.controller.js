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

  updateProyecto: async (req, res) => {
    const { id } = req.params;
    const data = { $set: req.body };

    const proyectoUpdate = await dto.updateProyecto(id, data);
    if (proyectoUpdate.message)
      return res
        .status(404)
        .send({ info: 'Solicitud no procesada, intenta nuevamente' });

    res
      .status(201)
      .send({ info: 'Proyecto actualizado satisfactoriamente', proyectoUpdate });
  },

  deleteProyecto: async (req, res) => {
    const id = req.params.id;

    const existe = await dto.getProyectoById(id);
    if (!existe)
      return res
        .status(404)
        .send({ info: 'Solicitud no procesada, proyecto no existe' });

    await dto.deleteProyecto(id);

    res.status(200).send({ info: 'Proyecto eliminado satisfactoriamente' });
  },
};
