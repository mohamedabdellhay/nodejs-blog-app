const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const { upload } = require("./controllers/fileUpload.js");
const path = require("path");
const app = express();
exports.app = app;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// connect to mongodb
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const host = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT1;
const mongoURI = `mongodb://${username}:${password}@${host}:${port}/blog?authSource=admin`;
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });
//  end connect to mongodb

// routes

app.use("/posts", require("./routes/postsRoutes"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
