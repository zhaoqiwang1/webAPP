const express = require('express')
const router = express.Router()
const Author = require('../models/author')


// Create Player ID Route
router.get('/', (req, res) => {
  res.render('phases/index', { 
    // needGridLayout: true,
    author: new Author() 
  })
})


// Collect Player ID Route
router.post('/', async (req, res) => {
  const author = new Author({
    name: req.body.name,
    playerId: parseInt(req.body.playerId),
  })
  try {
    const newAuthor = await author.save();
    req.session.playerId = newAuthor.playerId; // Store playerId in session
    res.redirect('phases');
} catch (err) {
    res.render('phases/index', {
        author: author,
        errorMessage: 'Error Creating Author'
    });
}
})

// Phase1 Route
router.get('/phase1', async (req, res) => {
  try {
    const author = await Author.findOne({ playerId: req.session.playerId }); // Retrieve author by session playerId
    if (!author) {
      return res.status(404).send('Author not found');
    }
    res.render('phases/phase1', {
      author: author,  // Pass author object to EJS template
    });
  } catch (err) {
    res.status(500).send('Error fetching author');
  }
});

// router.get('/phase1', (req, res) => {
//   res.render('phases/phase1', { 
//     author: new Author() 
//   })
// })

// Phase1 Collect Answers Route


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