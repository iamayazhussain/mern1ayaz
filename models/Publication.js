const mongoose = require('mongoose')

const PublicationSchema = mongoose.Schema({
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
  },
})

module.exports = mongoose.model('publications', PublicationSchema)
