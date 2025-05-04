const express = require('express')
const router = express.Router()
const Author = require('../models/author')


// Phase1 Route
router.get('/', (req, res) => {
  res.render('phases/index', { author: new Author() })
})


// Phase1 Collect Answers Route
router.post('/', async (req, res) => {
  const author = new Author({
    name: req.body.name,
    playerId: parseInt(req.body.playerId)
  })
  try {
    // Saving the author and awaiting the result
    const newAuthor = await author.save();
    res.redirect('phases');
} catch (err) {
    // Handling errors if any occur during the save
    res.render('phases/index', {
        author: author,
        errorMessage: 'Error Creating Author'
    });
}
})

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