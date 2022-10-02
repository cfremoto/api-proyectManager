const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    nombre: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    telefono: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
  },
  { versionKey: false, timestamps: true }
);
module.exports = model('User', userSchema);
