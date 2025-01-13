require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const appModel = require("./models/appModel");
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

// stop app middleware
app.use(async (req, res, next) => {
  const appStatus = await appModel.findOne({}, { _id: 0, run: 1 });
  const run = appStatus.run;
  if (!run) {
    return res
      .status(503)
      .sendFile(path.join(__dirname, "views/Unavailable.html"));
  }

  next();
});

// routes
app.use("/posts", require("./routes/postsRoutes"));
app.use("/auth", require("./routes/authRoutes"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
