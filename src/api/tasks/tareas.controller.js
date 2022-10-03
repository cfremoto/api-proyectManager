const dto = require('./tareas.dto.js');
const dtoProyecto = require('../proyects/proyecto.dto.js');

module.exports = {
  getTareas: async (req, res) => {
    const tareas = await dto.getTareas({ proyecto: req.params.id });
    if (tareas.message) return res.status(404).send({ info: 'No existen tareas' });

    res.status(200).send({ info: 'Busqueda exitosa', tareas });
  },

  createTarea: async (req, res) => {
    const id = req.body.proyecto;
    const user = req.user.user;

    const existeProyecto = await dtoProyecto.getProyectoById(id);
    if (!existeProyecto)
      return res.status(404).send({ info: 'No existe el proyecto.' });

    if (existeProyecto.autor.toString() !== user)
      return res.status(404).send({ info: 'No estas autorizado en este proyecto' });

    const newTarea = await dto.createTarea(req.body);
    if (newTarea.message)
      return res.status(404).send({ info: 'No se pudo realizar la operacion' });

    res.status(201).send({ info: 'Operacion Exitosa' });
  },

  updateTarea: async (req, res) => {
    const { id } = req.params;
    const { nombre, estado } = req.body;
    const data = {};

    const existeTarea = await dto.getTarea(id);
    if (!existeTarea) return res.status(404).send({ info: 'No existe la tarea' });

    data.nombre = nombre;
    data.estado = estado;

    const updateTarea = await dto.updateTarea(id, data);
    if (updateTarea.message)
      res.status(400).send({ info: 'No se pudo acrtualizar la tarea' });

    res.status(200).send({ info: 'Tarea actualizada correctamente', updateTarea });
  },

  deleteTarea: async (req, res) => {
    const id = req.params.id;

    const existe = await dto.getTarea(id);
    if (!existe)
      return res
        .status(404)
        .send({ info: 'Solicitud no procesada, tarea no existe' });

    await dto.deleteTarea(id);

    res.status(200).send({ info: 'Tarea eliminada satisfactoriamente' });
  },
};
