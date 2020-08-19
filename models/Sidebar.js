const mongoose = require('mongoose')

const SidebarSchema = mongoose.Schema({
  title: {
    type: String,
  },
  link: {
    type: String,
  },
  tag: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('sidebars', SidebarSchema)
