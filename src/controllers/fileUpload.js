// require("dotenv").config();
const fs = require("fs");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now() - 0}-${file.originalname}`);
  },
});

const upload = multer({ storage });

module.exports = { upload };
