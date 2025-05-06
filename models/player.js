const mongoose = require('mongoose')


const playerSchema = new mongoose.Schema({
  // player name:
  name: {
    type: String,
    required: true,
  },

  // player id:
  playerId: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value'
    }
  },

  // phase1 Q1 (support or oppose):
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

  // phase2 Q1 (pick one to read):
  P2T1Q1: {
    type: String,
    enum: ['arg1', 'arg2'],
    default: null
  },
  P2T2Q1: {
    type: String,
    enum: ['arg1', 'arg2'],
    default: null
  },
  P2T3Q1: {
    type: String,
    enum: ['arg1', 'arg2'],
    default: null
  },
  P2T4Q1: {
    type: String,
    enum: ['arg1', 'arg2'],
    default: null
  },

  // phase2 Q2 (evaluation of arg1):
  P2T1Q2: {
    type: String,
    enum: ['1', '2', '3', '4', '5'], // 5 dropdown options
    default: null
  },
  P2T2Q2: {
    type: String,
    enum: ['1', '2', '3', '4', '5'], // 5 dropdown options
    default: null
  },
  P2T3Q2: {
    type: String,
    enum: ['1', '2', '3', '4', '5'], // 5 dropdown options
    default: null
  },
  P2T4Q2: {
    type: String,
    enum: ['1', '2', '3', '4', '5'], // 5 dropdown options
    default: null
  },

  // created time for data:
  createdAt: {
    type: Date,
    default: () => new Date(Date.now() + 8 * 60 * 60 * 1000)
  },
  
})

module.exports = mongoose.model('Player', playerSchema, 'postedAnswers')