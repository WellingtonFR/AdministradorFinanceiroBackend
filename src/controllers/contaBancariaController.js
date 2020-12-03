const mongoose = require("mongoose");
const contaBancariaSchema = require("../models/contaBancaria");
const ContaBancaria = mongoose.model("ContaBancaria");
//const validation = require("../validations/livroValidation");

module.exports = {
  async index(req, res) {
    await ContaBancaria.find()
      .then((dados) => {
        if (dados.length === 0) {
          return res.status(200).send({ message: "Nâo há conta registrada" });
        }
        return res.status(200).send(dados);
      })
      .catch((err) => {
        return res
          .status(400)
          .send({ message: "Houve um erro ao buscar sua conta" });
      });
  },
};
