const mongoose = require("mongoose");

const appSchema = new mongoose.Schema({
  run: { type: Boolean },
});

appSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const appModel = mongoose.model("config", appSchema);

module.exports = appModel;
