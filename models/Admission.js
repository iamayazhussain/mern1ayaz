const mongoose = require('mongoose')

const AdmissionSchema = mongoose.Schema({
  name: {
    type: String,
  },
  mobile: {
    type: String,
  },
  dept: {
    type: String,
  },

  mark: {
    type: String,
  },
  cat: {
    type: String,
  },
  typ: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('admissions', AdmissionSchema)
