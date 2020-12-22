var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var registroFinanceiroSchema = new Schema(
  {
    identificacao: {
      type: String,
      maxLenght: 50,
      required: true,
    },
    tipo: {
      type: String,
      maxLenght: 100,
      required: true,
    },
    valor: {
      type: Number,
      maxLenght: 10,
      required: true,
    },
    idUsuario: {
      type: String,
      maxlength: 64,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RegistroFinanceiro", registroFinanceiroSchema);
