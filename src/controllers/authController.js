const User = require("../models/userModel");
const validator = require("../validator/authValidator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");

const logIn = async (req, res) => {
  const valid = validator(req.body);
  if (!valid) {
    return res.status(400).json(validator);
  }
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user._id }, config.get("jwtsecret"));
    res.header("x-auth-token", token);
    return res.status(200).json({ message: "User is found", token });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { logIn };
