const mongoose = require('mongoose')


const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  playerId: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value'
    }
  },
  createdAt: {
    type: Date,
    default: () => new Date(Date.now() + 8 * 60 * 60 * 1000)
  },
})

module.exports = mongoose.model('Author', authorSchema, 'reportedAnswers')