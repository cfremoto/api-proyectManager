const { Schema, model } = require('mongoose');

const tareaSchema = new Schema(
  {
    nombre: { type: String, required: true, trim: true },
    estado: { type: Boolean, default: false },
    proyecto: {
      type: Schema.Types.ObjectId,
      ref: 'Proyecto',
      required: true,
      trim: true,
    },
  },
  { versionKey: false, timestamps: true }
);
module.exports = model('Tarea', tareaSchema);
