const express = require("express");
const route = express.Router();
const connection = require("../database/connection");

//import controllers
const contaBancariaController = require("../controllers/contaBancariaController");

//Routes book
route.get("/ContaBancaria", contaBancariaController.index);

module.exports = route;
