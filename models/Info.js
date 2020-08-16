const mongoose = require("mongoose");

const InfoSchema = mongoose.Schema({
  tag: {
    type: String,
  },
  title: {
    type: String,
  },
  link: {
    type: String,
  },

  value: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("infos", InfoSchema);
