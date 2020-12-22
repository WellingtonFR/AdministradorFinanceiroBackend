var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var usuarioSchema = new Schema(
  {
    nomeUsuario: {
      type: String,
      maxLenght: 100,
      required: true,
    },
    dataDeNascimento: {
      type: String,
      maxLenght: 10,
      required: true,
    },
    email: {
      type: String,
      maxLenght: 100,
      required: true,
    },
    senha: {
      type: String,
      maxlength: 64,
      required: true,
      select: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Usuario", usuarioSchema);
