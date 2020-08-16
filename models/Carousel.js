const mongoose = require('mongoose')

const CarouselSchema = mongoose.Schema({
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

  tag: {
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
})

module.exports = mongoose.model('carousels', CarouselSchema)
