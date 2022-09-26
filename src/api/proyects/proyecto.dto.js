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

  createProyecto: async (parametro) => {
    try {
      const newProyecto = new modelProy(parametro);
      return await newProyecto.save();
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};
