const Ajv = require("ajv");
const ajv = new Ajv();

const userSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    email: { type: "string" },
    password: { type: "string" },
  },
  required: ["name", "email", "password"],
  additionalProperties: false,
};

const userValidator = ajv.compile(userSchema);
module.exports = userValidator;
