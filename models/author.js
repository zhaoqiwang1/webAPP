const mongoose = require('mongoose')


const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: () => new Date(Date.now() + 8 * 60 * 60 * 1000)
    // default: Date.now
  }
})

module.exports = mongoose.model('Author', authorSchema)