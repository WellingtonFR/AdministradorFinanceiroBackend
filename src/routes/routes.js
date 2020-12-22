const express = require("express");
const route = express.Router();
const connection = require("../database/connection");
const autenticar = require("../middlewares/autenticacao");

//import controllers
const contaBancariaController = require("../controllers/contaBancariaController");
const registroFinanceiroController = require("../controllers/registroFinanceiroController");
const autenticacaoController = require("../controllers/autenticacaoController");

//Routes conta bancária
route.get("/contabancaria", autenticar, contaBancariaController.index);
route.post("/contabancaria", autenticar, contaBancariaController.create);

//Routes conta bancária
route.get(
  "/registrofinanceiro",
  autenticar,
  registroFinanceiroController.index
);
route.post(
  "/registrofinanceiro",
  autenticar,
  registroFinanceiroController.create
);

//Routes usuário
route.post("/registrar", autenticacaoController.registrar);
route.post("/autenticar", autenticacaoController.autenticar);

module.exports = route;
