const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/thekitchen"
);

module.exports = mongoose.connection;
