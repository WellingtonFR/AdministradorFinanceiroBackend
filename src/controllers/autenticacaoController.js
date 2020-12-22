const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const usuarioSchema = require("../models/usuario");
const Usuario = mongoose.model("Usuario");
const validation = require("../validations/usuarioValidationSchema");
const { JWTTokenLocal } = require("../keys/keys");

function generateToken(params = {}) {
  return jwt.sign(params, process.env.SECRETJWT || JWTTokenLocal, {
    expiresIn: 86400,
  });
}

module.exports = {
  async registrar(req, res) {
    const { nomeUsuario, email, dataDeNascimento, senha } = req.body;

    const validationErrors = await validation.usuarioValidationSchema.validate({
      nomeUsuario: nomeUsuario,
      email: email,
      dataDeNascimento: dataDeNascimento,
      senha: senha,
    });
    if (validationErrors.error) {
      console.log(validationErrors);
      return res.status(422).send({ message: validationErrors.error.message });
    }

    const verificaUsuario = await Usuario.findOne({ email: email });
    if (verificaUsuario.length !== 0) {
      return res.status(400).send({ message: "Usuário já está cadastrado" });
    }

    bcrypt.hash(senha, 10, async function (err, hashedPassword) {
      const novoUsuario = new Usuario({
        nomeUsuario: nomeUsuario,
        email: email,
        dataDeNascimento: dataDeNascimento,
        senha: hashedPassword,
      });

      await novoUsuario
        .save()
        .then((data) => {
          return res.status(200).send({
            message: "Usuário criado com sucesso",
            token: generateToken(data._id),
          });
        })
        .catch((err) => {
          return res
            .status(400)
            .send({ message: "Erro ao salvar o novo usuário" });
        });
    });
  },
  async autenticar(req, res) {
    const { email, senha } = req.body;

    const usuario = await Usuario.findOne({ email: email }).select("+senha");

    if (!usuario) {
      return res.status(400).send({ message: "Usuário não cadastrado" });
    }

    if (!(await bcrypt.compare(senha, usuario.senha))) {
      return res.status(400).send({ message: "Usuário ou senha não confere" });
    }

    usuario.senha = undefined;

    res.send({
      token: generateToken({ id: usuario.id }),
    });
  },
  async logout(req, res) {
    res.send({ token: null });
  },
};
