const mongoose = require("mongoose");
const Joi = require("joi");
const registroFinanceiroSchema = require("../models/registroFinanceiro");
const RegistroFinanceiro = mongoose.model("RegistroFinanceiro");
const validation = require("../validations/registroFinanceiroValidationSchema");

module.exports = {
  async index(req, res) {
    await RegistroFinanceiro.find({ idUsuario: req.userId })
      .then((dados) => {
        if (dados.length === 0) {
          return res.status(200).send({ message: "Não há registros" });
        }
        return res.status(200).send(dados);
      })
      .catch((err) => {
        return res
          .status(400)
          .send({ message: "Houve um erro ao localizar os registros" });
      });
  },
  async create(req, res) {
    const { identificacao, tipo, valor } = req.body;

    const validationErrors = await validation.registroFinanceiroValidationSchema.validate(
      {
        identificacao: identificacao,
        tipo: tipo,
        valor: valor,
      }
    );
    if (validationErrors.error) {
      return res.status(422).send({ message: validationErrors.error.message });
    }

    const novaConta = new RegistroFinanceiro({
      identificacao: identificacao,
      tipo: tipo,
      valor: valor,
      idUsuario: req.userId,
    });

    await novaConta
      .save()
      .then(() => {
        return res.status(200).send({ message: "Registro feito com sucesso" });
      })
      .catch((err) => {
        return res
          .status(400)
          .send({ message: "Ocorreu um erro ao realizar o registro" });
      });
  },
};
