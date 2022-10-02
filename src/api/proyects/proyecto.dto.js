const modelProy = require('./proyecto.model.js');

module.exports = {
  getProyectos: async (parametro) => {
    try {
      return await modelProy.find(parametro);
    } catch (err) {
      console.log(err);
      return err;
    }
  },

  getProyectoById: async (parametro) => {
    try {
      return await modelProy.findById(parametro);
    } catch (err) {
      console.log(err);
      return err;
    }
  },

  createProyecto: async (parametro) => {
    try {
      const newProyecto = new modelProy(parametro);
      return await newProyecto.save();
    } catch (err) {
      console.log(err);
      return err;
    }
  },

  updateProyecto: async (parametroBusqueda, parametroUpdate) => {
    try {
      return await modelProy.findByIdAndUpdate(parametroBusqueda, parametroUpdate, {
        new: true,
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  },

  deleteProyecto: async (parametro) => {
    try {
      return await modelProy.findByIdAndDelete(parametro);
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};
