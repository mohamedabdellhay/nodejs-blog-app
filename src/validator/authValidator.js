const Ajv = require("ajv");
const ajv = new Ajv();

const userSchema = {
  type: "object",
  properties: {
    email: { type: "string" },
    password: { type: "string" },
  },
  required: ["email", "password"],
  additionalProperties: false,
};

const userValidator = ajv.compile(userSchema);

module.exports = userValidator;
