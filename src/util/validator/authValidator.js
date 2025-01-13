const Ajv = require("ajv");
const ajv = new Ajv();

const userSchema = {
  type: "object",
  properties: {
    email: {
      type: "string",
      pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
    },
    password: { type: "string" },
  },
  required: ["email", "password"],
  additionalProperties: false,
};

const userValidator = ajv.compile(userSchema);

module.exports = userValidator;
