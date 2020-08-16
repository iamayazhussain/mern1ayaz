const mongoose = require('mongoose')

const PublicationSchema = mongoose.Schema({
  title: {
    type: String,
  },
  descp: {
    type: String,
  },
  link: {
    type: String,
  },
  date: {
    type: Date,
  },
})

module.exports = mongoose.model('publications', PublicationSchema)
