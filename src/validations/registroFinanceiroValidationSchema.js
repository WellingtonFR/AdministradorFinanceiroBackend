const joi = require("joi");

const registroFinanceiroValidationSchema = joi.object({
  identificacao: joi.string().max(50).required().messages({
    "string.base": "O campo identificação está em formato inválido",
    "string.max": "O campo identificação deve ter no máximo 50 caracteres",
    "string.empty": "O campo identificação não pode estar vazio",
    "any.required": "O campo identificação deve ser preenchido",
  }),
  tipo: joi.string().max(20).required().messages({
    "string.base": "O campo tipo está em formato inválido",
    "string.max": "O campo tipo deve ter no máximo 20 caracteres",
    "string.empty": "O campo tipo não pode estar vazio",
    "any.required": "O campo tipo deve ser preenchido",
  }),
  valor: joi
    .number()
    .precision(2)
    .strict()
    .min(0.01)
    .max(9999999999.99)
    .required()
    .messages({
      "number.base": "O campo valor está em formato inválido",
      "number.min": "O campo valor deve ser no minímo 0,01",
      "number.max": "O campo valor deve ter deve ter no máximo 10 dígitos",
      "number.precision": "O campo valor aceita somente duas casas decimais",
      "number.empty": "O campo valor não pode estar vazio",
      "any.required": "O campo valor deve ser preenchido",
    }),
});

module.exports = { registroFinanceiroValidationSchema };
