const joi = require("joi");

const contaBancariaValidationSchema = joi.object({
  banco: joi.string().max(4).required().messages({
    "string.base": "O campo banco está em formato inválido",
    "string.max": "O campo banco deve ter no máximo 4 caracteres",
    "string.empty": "O campo banco não pode estar vazio",
    "any.required": "O campo banco deve ser preenchido",
  }),
  agencia: joi.string().max(20).required().messages({
    "string.base": "O campo agência está em formato inválido",
    "string.max": "O campo agência deve ter no máximo 20 caracteres",
    "string.empty": "O campo agência não pode estar vazio",
    "any.required": "O campo agência deve ser preenchido",
  }),
  conta: joi.string().max(20).required().messages({
    "string.base": "O campo conta está em formato inválido",
    "string.max": "O campo conta deve ter deve ter no máximo 20 caracteres",
    "string.empty": "O campo conta não pode estar vazio",
    "any.required": "O campo conta deve ser preenchido",
  }),
  apelido: joi.string().max(30).required().messages({
    "string.base": "O campo apelido está em formato inválido",
    "string.max": "O campo apelido deve ter deve ter no máximo 30 caracteres",
    "string.empty": "O campo apelido não pode estar vazio",
    "any.required": "O campo apelido deve ser preenchido",
  }),
});

module.exports = { contaBancariaValidationSchema };
