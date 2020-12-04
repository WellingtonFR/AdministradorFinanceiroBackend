var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var contaBancariaSchema = new Schema(
  {
    banco: {
      type: String,
      maxLenght: 4,
      required: true,
    },
    agencia: {
      type: String,
      maxLenght: 20,
      required: true,
    },
    conta: {
      type: String,
      maxLenght: 20,
      required: true,
    },
    apelido: {
      type: String,
      maxlength: 30,
      required: true,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("ContaBancaria", contaBancariaSchema);
