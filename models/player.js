const mongoose = require('mongoose')


const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  playerId: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value'
    }
  },
  P1T1Q1: {
    type: String,
    enum: ['support', 'oppose'],
    default: null
  },
  P1T2Q1: {
    type: String,
    enum: ['support', 'oppose'],
    default: null
  },
  P1T3Q1: {
    type: String,
    enum: ['support', 'oppose'],
    default: null
  },
  P1T4Q1: {
    type: String,
    enum: ['support', 'oppose'],
    default: null
  },
  createdAt: {
    type: Date,
    default: () => new Date(Date.now() + 8 * 60 * 60 * 1000)
  },
  
})

module.exports = mongoose.model('Player', playerSchema, 'postedAnswers')