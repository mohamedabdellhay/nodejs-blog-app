const userValidator = require("../util/validator/userValidator");

const validateUserMiddleware = (req, res, next) => {
  const valid = userValidator(req.body);
  if (!valid) {
    return res.status(400).json({
      error: "Invalid user data",
      details: userValidator.errors,
    });
  }

  req.body.valid = true;
  next();
};

module.exports = validateUserMiddleware;
