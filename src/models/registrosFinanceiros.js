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
      type: String,
      maxLenght: 20,
      required: true,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("RegistroFinanceiro", registroFinanceiroSchema);
