const mongoose = require('mongoose')

const PlacementSchema = mongoose.Schema({
  dept: {
    type: String,
  },
  title: {
    type: String,
  },
  journal: {
    type: String,
  },
  link: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('placements', PlacementSchema)
