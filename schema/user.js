const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  isAdmin: {
    required: true,
    type: Boolean,
  },
});

module.exports = mongoose.model("Customer", customerSchema);
