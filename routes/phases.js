const express = require('express')
const router = express.Router()
const Player = require('../models/player')


// Create Player ID Route
router.get('/', (req, res) => {
  res.render('phases/index', { 
    // needGridLayout: true,
    player: new Player() 
  })
})


// Collect Player ID Route
router.post('/', async (req, res) => {
  const player = new Player({
    name: req.body.name,
    playerId: parseInt(req.body.playerId),
  })
  try {
    const newPlayer = await player.save();
    req.session.playerId = newPlayer._id; // 保存 MongoDB 生成的 _id
    res.redirect('phases');
} catch (err) {
    console.error(err); 
    res.render('phases/index', {
        player: player,
        errorMessage: 'Error Creating Player'
    });
}
})

// Phase1 Route
router.get('/phase1', async (req, res) => {
  try {
    const player = await Player.findOne({ _id: req.session.playerId }); // Retrieve author by session playerId
    if (!player) {
      return res.status(404).send('Player not found');
    }
    res.render('phases/phase1', {
      player: player,  // Pass author object to EJS template
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error fetching player');
  }
});

// router.get('/phase1', (req, res) => {
//   res.render('phases/phase1', { 
//     author: new Author() 
//   })
// })

// Phase1 Collect Answers Route
// router.post('/phase1', async (req, res) => {
//   try {
//     const { P1T1Q1, P1T1Q2 } = req.body;
//     const playerId = req.session.playerId;

//     if (!playerId) {
//       return res.status(400).send('No session found. Please start again.');
//     }

//     const player = await Author.findById(playerId);
//     if (!player) {
//       return res.status(404).send('player not found');
//     }

//     player.P1T1Q1 = P1T1Q1;
//     player.P1T1Q2 = P1T1Q2;
//     await player.save();

//     res.send('All data saved!');
//   } catch (err) {
//     res.status(500).send('Error saving phase1 data');
//   }
// });



// Phase2 Route
router.get('/phase2', (req, res) => {
  res.render('phases/phase2')
})

// Phase2 Collect Answers Route

// Phase3_intro Route
router.get('/phase3_intro', (req, res) => {
  res.render('phases/phase3_intro')
})

// Phase3_repQ Route
router.get('/phase3_repQ', (req, res) => {
  res.render('phases/phase3_repQ')
})

// Phase3_repQ Collect Answers Route

// Phase3_newQ Route
router.get('/phase3_newQ', (req, res) => {
  res.render('phases/phase3_newQ')
})

// Phase3_newQ Collect Answers Route

// export routes
module.exports = router