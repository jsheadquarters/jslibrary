const mongoose = require("mongoose");

const dbPath = process.env.MONGODB_URI || "mongodb://localhost";
mongoose.connect(`${dbPath}/jslibrary`);

module.exports = {
  "User": require("./User")
};
