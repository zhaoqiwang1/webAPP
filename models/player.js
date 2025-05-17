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
  // random Topic Number:
  randomTopicOrder: {
    type: [Number],
    default: []
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

  // phase2 Q3 (evaluation of arg2):
  P2T1Q3: {
    type: String,
    enum: ['1', '2', '3', '4', '5'], // 5 dropdown options
    default: null
  },
  P2T2Q3: {
    type: String,
    enum: ['1', '2', '3', '4', '5'], // 5 dropdown options
    default: null
  },
  P2T3Q3: {
    type: String,
    enum: ['1', '2', '3', '4', '5'], // 5 dropdown options
    default: null
  },
  P2T4Q3: {
    type: String,
    enum: ['1', '2', '3', '4', '5'], // 5 dropdown options
    default: null
  },

  // phase3_repQ Q1 (pick one to read):
  P3T1Q1_Rep: {
    type: String,
    enum: ['arg1', 'arg2'],
    default: null
  },
  P3T2Q1_Rep: {
    type: String,
    enum: ['arg1', 'arg2'],
    default: null
  },
  P3T3Q1_Rep: {
    type: String,
    enum: ['arg1', 'arg2'],
    default: null
  },
  P3T4Q1_Rep: {
    type: String,
    enum: ['arg1', 'arg2'],
    default: null
  },

  // phase3_Rep Q2 (evaluation of arg1):
  P3T1Q2_Rep: {
    type: String,
    enum: ['1', '2', '3', '4', '5'], // 5 dropdown options
    default: null
  },
  P3T2Q2_Rep: {
    type: String,
    enum: ['1', '2', '3', '4', '5'], // 5 dropdown options
    default: null
  },
  P3T3Q2_Rep: {
    type: String,
    enum: ['1', '2', '3', '4', '5'], // 5 dropdown options
    default: null
  },
  P3T4Q2_Rep: {
    type: String,
    enum: ['1', '2', '3', '4', '5'], // 5 dropdown options
    default: null
  },

    // phase3_Rep Q3 (evaluation of arg2):
    P3T1Q3_Rep: {
      type: String,
      enum: ['1', '2', '3', '4', '5'], // 5 dropdown options
      default: null
    },
    P3T2Q3_Rep: {
      type: String,
      enum: ['1', '2', '3', '4', '5'], // 5 dropdown options
      default: null
    },
    P3T3Q3_Rep: {
      type: String,
      enum: ['1', '2', '3', '4', '5'], // 5 dropdown options
      default: null
    },
    P3T4Q3_Rep: {
      type: String,
      enum: ['1', '2', '3', '4', '5'], // 5 dropdown options
      default: null
    },

  // phase3_newQ Q1 (pick one to read):
  P3T1Q1_New: {
    type: String,
    enum: ['arg1', 'arg2'],
    default: null
  },
  P3T2Q1_New: {
    type: String,
    enum: ['arg1', 'arg2'],
    default: null
  },
  P3T3Q1_New: {
    type: String,
    enum: ['arg1', 'arg2'],
    default: null
  },
  P3T4Q1_New: {
    type: String,
    enum: ['arg1', 'arg2'],
    default: null
  },

   // phase3_New Q2 (evaluation of arg1):
   P3T1Q2_New: {
    type: String,
    enum: ['1', '2', '3', '4', '5'], // 5 dropdown options
    default: null
  },
  P3T2Q2_New: {
    type: String,
    enum: ['1', '2', '3', '4', '5'], // 5 dropdown options
    default: null
  },
  P3T3Q2_New: {
    type: String,
    enum: ['1', '2', '3', '4', '5'], // 5 dropdown options
    default: null
  },
  P3T4Q2_New: {
    type: String,
    enum: ['1', '2', '3', '4', '5'], // 5 dropdown options
    default: null
  },

    // phase3_New Q3 (evaluation of arg2):
    P3T1Q3_New: {
      type: String,
      enum: ['1', '2', '3', '4', '5'], // 5 dropdown options
      default: null
    },
    P3T2Q3_New: {
      type: String,
      enum: ['1', '2', '3', '4', '5'], // 5 dropdown options
      default: null
    },
    P3T3Q3_New: {
      type: String,
      enum: ['1', '2', '3', '4', '5'], // 5 dropdown options
      default: null
    },
    P3T4Q3_New: {
      type: String,
      enum: ['1', '2', '3', '4', '5'], // 5 dropdown options
      default: null
    },

  // created time for data:
  createdAt: {
    type: Date,
    default: () => new Date(Date.now() + 8 * 60 * 60 * 1000)
  },
  
    // Submission locks
    phase1Submitted: { type: Boolean, default: false },
    phase2Submitted: { type: Boolean, default: false },
    phase3RepQSubmitted: { type: Boolean, default: false },
    phase3NewQSubmitted: { type: Boolean, default: false },

})

module.exports = mongoose.model('Player', playerSchema, 'postedAnswers')