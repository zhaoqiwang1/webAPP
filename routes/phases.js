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
router.post('/phase1', async (req, res) => {
  try {
    const playerId = req.session.playerId;
    const player = await Player.findById(playerId);
    if (!player) {
      return res.status(404).send('Player not found');
    }

    player.P1T1Q1 = req.body.P1T1Q1;
    player.P1T2Q1 = req.body.P1T2Q1;
    player.P1T3Q1 = req.body.P1T3Q1;
    player.P1T4Q1 = req.body.P1T4Q1;

    await player.save();

    res.redirect('/phases/phase2'); // or whatever your next step is
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to save responses');
  }
});



// Phase2 Route
router.get('/phase2', async (req, res) => {
    try {
    const player = await Player.findOne({ _id: req.session.playerId }); // Retrieve player by session playerId
    if (!player) {
      return res.status(404).send('Player not found');
    }
    res.render('phases/phase2', {
      player: player,  // Pass player object to EJS template
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error fetching player');
  }
})

// Phase2 Collect Answers Route
router.post('/phase2', async (req, res) => {
  try {
    const playerId = req.session.playerId;
    const player = await Player.findById(playerId);
    if (!player) {
      return res.status(404).send('Player not found');
    }
    // Phase2 Q1:
    player.P2T1Q1 = req.body.P2T1Q1;
    player.P2T2Q1 = req.body.P2T2Q1;
    player.P2T3Q1 = req.body.P2T3Q1;
    player.P2T4Q1 = req.body.P2T4Q1;
    // Phase2 Q2:
    player.P2T1Q2 = req.body.P2T1Q2;
    player.P2T2Q2 = req.body.P2T2Q2;
    player.P2T3Q2 = req.body.P2T3Q2;
    player.P2T4Q2 = req.body.P2T4Q2;
    // Phase2 Q3:
    player.P2T1Q3 = req.body.P2T1Q3;
    player.P2T2Q3 = req.body.P2T2Q3;
    player.P2T3Q3 = req.body.P2T3Q3;
    player.P2T4Q3 = req.body.P2T4Q3;

    await player.save();

    res.redirect('/phases/phase3_intro'); // or whatever your next step is
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to save responses');
  }
});





// Phase3_intro Route
router.get('/phase3_intro', (req, res) => {
  res.render('phases/phase3_intro')
})

// Phase3_repQ Route
router.get('/phase3_repQ', async (req, res) => {
  try {
    const player = await Player.findOne({ _id: req.session.playerId }); // Retrieve player by session playerId
    if (!player) {
      return res.status(404).send('Player not found');
    }
    res.render('phases/phase3_repQ', {
      player: player,  // Pass player object to EJS template
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error fetching player');
  }
})

// Phase3_repQ Collect Answers Route
router.post('/phase3_repQ', async (req, res) => {
  try {
    const playerId = req.session.playerId;
    const player = await Player.findById(playerId);
    if (!player) {
      return res.status(404).send('Player not found');
    }
    // Phase3_repQ Q1:
    player.P3T1Q1_Rep = req.body.P3T1Q1_Rep;
    player.P3T2Q1_Rep = req.body.P3T2Q1_Rep;
    player.P3T3Q1_Rep = req.body.P3T3Q1_Rep;
    player.P3T4Q1_Rep = req.body.P3T4Q1_Rep;

    // Phase3_repQ Q2:
    player.P3T1Q2_Rep = req.body.P3T1Q2_Rep;
    player.P3T2Q2_Rep = req.body.P3T2Q2_Rep;
    player.P3T3Q2_Rep = req.body.P3T3Q2_Rep;
    player.P3T4Q2_Rep = req.body.P3T4Q2_Rep;

    // Phase3_repQ Q3:
    player.P3T1Q3_Rep = req.body.P3T1Q3_Rep;
    player.P3T2Q3_Rep = req.body.P3T2Q3_Rep;
    player.P3T3Q3_Rep = req.body.P3T3Q3_Rep;
    player.P3T4Q3_Rep = req.body.P3T4Q3_Rep;

    await player.save();

    res.redirect('/phases/phase3_newQ'); // or whatever your next step is
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to save responses');
  }
});


// Phase3_newQ Route
router.get('/phase3_newQ', async (req, res) => {
  try {
    const player = await Player.findOne({ _id: req.session.playerId }); // Retrieve player by session playerId
    if (!player) {
      return res.status(404).send('Player not found');
    }
    res.render('phases/phase3_newQ', {
      player: player,  // Pass player object to EJS template
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error fetching player');
  }
})

// Phase3_newQ Collect Answers Route
router.post('/phase3_newQ', async (req, res) => {
  try {
    const playerId = req.session.playerId;
    const player = await Player.findById(playerId);
    if (!player) {
      return res.status(404).send('Player not found');
    }
    // Phase3_newQ Q1:
    player.P3T1Q1_New = req.body.P3T1Q1_New;
    player.P3T2Q1_New = req.body.P3T2Q1_New;
    player.P3T3Q1_New = req.body.P3T3Q1_New;
    player.P3T4Q1_New = req.body.P3T4Q1_New;

    // Phase3_newQ Q2:
    player.P3T1Q2_New = req.body.P3T1Q2_New;
    player.P3T2Q2_New = req.body.P3T2Q2_New;
    player.P3T3Q2_New = req.body.P3T3Q2_New;
    player.P3T4Q2_New = req.body.P3T4Q2_New;
  
    // Phase3_newQ Q3:
    player.P3T1Q3_New = req.body.P3T1Q3_New;
    player.P3T2Q3_New = req.body.P3T2Q3_New;
    player.P3T3Q3_New = req.body.P3T3Q3_New;
    player.P3T4Q3_New = req.body.P3T4Q3_New;

    await player.save();

    res.redirect('/phases/phase3_newQ'); // or whatever your next step is
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to save responses');
  }
});


// export routes
module.exports = router