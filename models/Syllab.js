const mongoose = require('mongoose')

const SyllabSchema = mongoose.Schema({
  dept: {
    type: String,
  },
  sem: {
    type: String,
  },
  type: {
    type: String,
  },

  syllabus: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('syllabs', SyllabSchema)
