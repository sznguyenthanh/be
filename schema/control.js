const mongoose = require("mongoose");

const controlSchema = new mongoose.Schema({
  state: {
    required: true,
    type: Boolean,
  },
});

module.exports = mongoose.model("control", controlSchema);
