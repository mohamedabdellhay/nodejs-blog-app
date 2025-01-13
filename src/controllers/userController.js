const { get } = require("mongoose");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, email, and password are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { name: 1, email: 1, _id: 0 });

    if (!users) {
      return res.status(404).json({
        message: "No users Found",
      });
    }

    res.json({
      status: "ok",
      data: users,
    });
  } catch (error) {
    res.status(503).json({
      status: 503,
      message: "internal server error",
    });
  }
};

module.exports = { createUser, getAllUsers };
