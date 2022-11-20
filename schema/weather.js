const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
  temp: {
    required: true,
    type: Number,
  },
  hu: {
    required: true,
    type: Number,
  },
  loca: {
    required: true,
    type: String,
  },
  time: {
    required: true,
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Weather", weatherSchema);
