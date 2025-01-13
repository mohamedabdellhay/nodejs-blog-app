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

// Compile the schema into a validator function
const userValidator = ajv.compile(userSchema);

// Export the validator function
module.exports = userValidator;
