const modelUser = require('./user.model.js');

module.exports = {
  getOneuser: async (parametro) => {
    try {
      return await modelUser.findOne(parametro);
    } catch (err) {
      console.log(err);
      return err;
    }
  },

  getUserById: async (parametro) => {
    try {
      return await modelUser.findById(parametro).select('-password');
    } catch (err) {
      console.log(err);
      return err;
    }
  },

  getUsers: async (parametro) => {
    try {
      return await modelUser.find(parametro, { password: 0 });
    } catch (err) {
      console.log(err);
      return err;
    }
  },

  createUser: async (parametro) => {
    try {
      const newUser = new modelUser(parametro);
      return await newUser.save();
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};
