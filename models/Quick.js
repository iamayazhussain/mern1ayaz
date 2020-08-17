const mongoose = require("mongoose");

const QuickSchema = mongoose.Schema({
  tag: {
    type: String,
  },
  title: {
    type: String,
  },
  link: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("quicks", QuickSchema);
