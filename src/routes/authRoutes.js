const { logIn } = require("../controllers/authController");
const { createUser, getAllUsers } = require("../controllers/userController");
const userValidator = require("../middleware/userMiddlewareValidator");
const logInValidator = require("../middleware/loginMiddlewareValidator");
const express = require("express");
const router = express.Router();

// login
router.get("/", getAllUsers);
router.post("/", userValidator, createUser);
router.post("/login", logInValidator, logIn);

module.exports = router;
