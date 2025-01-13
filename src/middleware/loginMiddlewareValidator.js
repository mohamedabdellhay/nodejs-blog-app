const validator = require("../util/validator/authValidator");

const logInValidator = (req, res, next) => {
  const valid = validator(req.body);

  if (!valid) {
    return res.status(400).json({
      error: "Invalid user data",
      details: validator.errors,
    });
  }

  next();
};

module.exports = logInValidator;
