var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var usuarioSchema = new Schema(
  {
    nome: {
      type: String,
      maxLenght: 100,
      required: true,
    },
    email: {
      type: String,
      maxLenght: 100,
      required: true,
    },
    senha: {
      type: String,
      maxLenght: 20,
      required: true,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Usuario", usuarioSchema);
