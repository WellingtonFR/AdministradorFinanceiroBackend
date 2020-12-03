const mongoose = require("mongoose");
const { dbStringConnection } = require("../keys/keys");

mongoose.connect(dbStringConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
