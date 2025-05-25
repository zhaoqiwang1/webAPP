const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

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
  // 记录这个玩家是参加的“实验组”还是“对照组”。
  group: {
    type: String,
    enum: ['实验组', '对照组'],
    required: true,
  },

  // random Topic Number and their labels:
  randomTopicOrder: {
    type: [Number],
    default: []
  },

  randomTopicOrderLabel: {
    type: String,
    default: ''
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

  // Phase 2 Attention Check Question.
  P2AttentionCheck: {
    type: String,
    enum: ['left', 'right'],
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

// 保存前从 config.txt 获取当前实验分组
playerSchema.pre('validate', function (next) {
  const player = this;
  const configPath = path.join(__dirname, '../public/treatment/config.txt');

  try {
    const content = fs.readFileSync(configPath, 'utf8').trim(); // 去掉多余空格换行
    if (content !== '实验组' && content !== '对照组') {
      throw new Error('config.txt 内容必须是“实验组”或“对照组”');
    }

    player.group = content;
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model('Player', playerSchema, 'postedAnswers')