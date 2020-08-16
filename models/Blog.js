const mongoose = require('mongoose')

const BlogSchema = mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  descp: {
    type: String,
  },

  dept: {
    type: String,
  },
  tag: [{}],

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
})

module.exports = mongoose.model('blogs', BlogSchema)
