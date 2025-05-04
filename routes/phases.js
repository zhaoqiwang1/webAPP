const express = require('express')
const router = express.Router()
const Author = require('../models/author')


// All Authors Route
router.get('/', (req, res) => {
  res.render('phases/index', { author: new Author() })
})


// Create Author Route
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

// New Author Route
router.get('/phase2', (req, res) => {
  res.render('phases/phase2')
})

module.exports = router