const joi = require("joi");

const usuarioValidationSchema = joi.object({
  nomeUsuario: joi.string().max(50).required().messages({
    "string.base": "O campo nome está em formato inválido",
    "string.max": "O campo nome deve ter no máximo 100 caracteres",
    "string.empty": "O campo nome não pode estar vazio",
    "any.required": "O campo nome deve ser preenchido",
  }),
  email: joi
    .string()
    .max(100)
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .messages({
      "string.base": "O email está em formato inválido",
      "string.max": "O email deve ter no máximo 10 caracteres",
      "string.email": "O email está em formato inválido",
      "string.empty": "O email não pode estar vazio",
      "any.required": "O email deve ser preenchido",
    }),
  dataDeNascimento: joi.string().max(10).required().messages({
    "string.base": "O campo data de nascimento está em formato inválido",
    "string.max": "O campo data de nascimento deve ter no máximo 10 caracteres",
    "string.empty": "O campo data de nascimento não pode estar vazio",
    "any.required": "O campo data de nascimento deve ser preenchido",
  }),
  senha: joi
    .string()
    .min(6)
    .max(64)
    .pattern(new RegExp("^[a-zA-Z0-9$#*]{6,64}$"))
    .required()
    .messages({
      "string.base": "A senha está em formato inválido",
      "string.min": "A senha deve conter no mínimo 6 caracteres",
      "string.max": "A senha deve ter deve ter no máximo 15 caracteres",
      "string.pattern":
        "A senha deve conter somente letras maiúsculas, minúsculas, números ou os seguintes caracteres especiais *$#",
      "string.empty": "A senha não pode estar vazio",
      "any.required": "A senha deve ser preenchido",
    }),
});

module.exports = { usuarioValidationSchema };
