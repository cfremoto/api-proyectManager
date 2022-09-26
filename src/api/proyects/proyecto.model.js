const { Schema, model } = require('mongoose');

const proyectoSchema = new Schema(
  {
    nombre: { type: String, required: true, trim: true },
    autor: { type: Schema.Types.ObjectId, ref: 'User', required: true, trim: true },
  },
  { versionKey: false, timestamps: true }
);
module.exports = model('Proyecto', proyectoSchema);
