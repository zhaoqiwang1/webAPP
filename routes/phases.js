const express = require('express')
const router = express.Router()
const Player = require('../models/player')
const fs = require('fs');
const path = require('path');

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
    res.redirect('phases/phase1');
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


// Save topic random order from frontend
router.post('/save-topic-order', async (req, res) => {
  console.log('Received req.body:', req.body);
  try {
    const playerId = req.session.playerId;
    const player = await Player.findById(playerId);
    if (!player) {
      return res.status(404).send('Player not found');
    }

    // 如果数据库中还没有 randomTopicOrder 才写入
    if (!player.randomTopicOrder || player.randomTopicOrder.length === 0) {
      const order = req.body.randomTopicOrder;

      if (Array.isArray(order)) {
        player.randomTopicOrder = order;

        // 映射为中文标签并保存
        const topicMap = ['文化', '科技', '经济', '社会'];
        const labelString = order.map(i => topicMap[i]).join(',');
        
        player.randomTopicOrderLabel = labelString;

        await player.save();
        console.log("Saved randomTopicOrder to MongoDB:", order);
        console.log('Saved randomTopicOrder and label:', labelString);
      } else {
        console.warn("Invalid randomTopicOrder format");
      }
    }

    res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.status(500).send('Failed to save topic order');
    }
});

// Phase1 Collect Answers Route
router.post('/phase1', async (req, res) => {
  try {
    const playerId = req.session.playerId;
    const player = await Player.findById(playerId);
    if (!player) {
      return res.status(404).send('Player not found');
    }

    // Check if phase1 already submitted
    if (player.phase1Submitted) {
      // Don't overwrite data, just move forward
      return res.redirect('/phases/phase2?alreadySubmitted=true');
    }

    player.P1T1Q1 = req.body.P1T1Q1;
    player.P1T2Q1 = req.body.P1T2Q1;
    player.P1T3Q1 = req.body.P1T3Q1;
    player.P1T4Q1 = req.body.P1T4Q1;

    player.phase1Submitted = true; // lock submission

    await player.save();

    res.redirect('/phases/phase2'); // or whatever your next step is
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to save responses');
  }
});
/* Below is the route for post /phase1 with out lock submission:
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

*/

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

    // Check if phase1 already submitted
    if (player.phase2Submitted) {
      // Don't overwrite data, just move forward
      return res.redirect('/phases/phase3_intro?alreadySubmitted=true');
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
    // Phase2 Attention Check Question:
    player.P2AttentionCheck = req.body.P2AttentionCheck;

    player.phase2Submitted = true; // lock submission

    await player.save();

    res.redirect('/phases/phase3_intro'); // or whatever your next step is
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to save responses');
  }
});





// Phase3_intro Route
router.get('/phase3_intro', (req, res) => {
  const txtFilePath = path.join(__dirname, '..', 'public', 'treatment', 'config.txt');
  const treatmentContent = require(path.join(__dirname, '..', 'data', 'logicIntro.js'));
  
  fs.readFile(txtFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Failed to read file:', err);
      return res.status(500).send('Server error');
    }

    // Do logic based on file content
    let message = '';
    if (data.includes('实验组')) {
      message = treatmentContent.treatment;
    } else {
      message = treatmentContent.control;
    }

    // Render EJS page with data
    res.render('phases/phase3_intro', { message });
  });
  //res.render('phases/phase3_intro')
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

    // Check if phase1 already submitted
    if (player.phase3RepQSubmitted) {
      // Don't overwrite data, just move forward
      return res.redirect('/phases/phase3_newQ?alreadySubmitted=true');
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

    // Phase3_repQ Attention Check Question:
    player.P3RepAttentionCheck = req.body.P3RepAttentionCheck;

    player.phase3RepQSubmitted = true; // lock submission

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

    // Check if answers already submitted
    if (player.phase3NewQSubmitted) {
      // Don't overwrite data, just move forward
      return res.redirect('/phases/gameEnd?alreadySubmitted=true');
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

    player.phase3NewQSubmitted = true; // lock submission

    await player.save();

    res.redirect('/phases/gameEnd'); // or whatever your next step is
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to save responses');
  }
});

// Game End Route
router.get('/gameEnd', (req, res) => {
  res.render('phases/gameEnd')
})

// export routes
module.exports = router