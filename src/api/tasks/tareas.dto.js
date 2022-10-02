const modelTarea = require('./tareas.model.js');

module.exports = {
  getTareas: async (parametro) => {
    try {
      return await modelTarea.find(parametro);
    } catch (err) {
      console.log(err);
      return err;
    }
  },

  getTarea: async (parametro) => {
    try {
      return await modelTarea.findById(parametro);
    } catch (err) {
      console.log(err);
      return err;
    }
  },

  getTarea: async (parametro) => {
    try {
      return await modelTarea.findById(parametro);
    } catch (err) {
      console.log(err);
      return err;
    }
  },

  createTarea: async (parametro) => {
    try {
      const newTarea = new modelTarea(parametro);
      return await newTarea.save();
    } catch (err) {
      console.log(err);
      return err;
    }
  },

  updateTarea: async (id, parametro) => {
    try {
      return await modelTarea.findByIdAndUpdate(id, parametro, { new: true });
    } catch (err) {
      console.log(err);
      return err;
    }
  },

  deleteTarea: async (parametro) => {
    try {
      return await modelTarea.findByIdAndDelete(parametro);
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};
