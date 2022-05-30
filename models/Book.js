const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
  title: {
    type: String,
  },
})

module.exports = mongoose.model('books', BookSchema)
