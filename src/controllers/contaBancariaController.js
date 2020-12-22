const mongoose = require("mongoose");
const Joi = require("joi");
const contaBancariaSchema = require("../models/contaBancaria");
const ContaBancaria = mongoose.model("ContaBancaria");
const validation = require("../validations/contaBancariaValidationSchema");

module.exports = {
  async index(req, res) {
    await ContaBancaria.find({ idUsuario: req.userId })
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
  async create(req, res) {
    const { banco, agencia, conta, apelido } = req.body;

    const validationErrors = await validation.contaBancariaValidationSchema.validateAsync(
      {
        banco: banco,
        agencia: agencia,
        conta: conta,
        apelido: apelido,
      }
    );
    if (validationErrors.error) {
      return res.status(422).send({ message: validationErrors.error.message });
    }

    const contaExistente = await ContaBancaria.findOne({
      agencia: agencia,
      conta: conta,
    });

    if (contaExistente) {
      return res.status(400).send({ message: "Essa conta já está cadastrada" });
    }

    const novaConta = new ContaBancaria({
      banco: banco,
      agencia: agencia,
      conta: conta,
      apelido: apelido,
      idUsuario: req.userId,
    });

    await novaConta
      .save()
      .then(() => {
        return res
          .status(200)
          .send({ message: "Conta cadastrada com sucesso" });
      })
      .catch((err) => {
        console.log(err);
        return res
          .status(400)
          .send({ message: "Ocorreu um erro ao cadastrar sua conta" });
      });
  },
};
