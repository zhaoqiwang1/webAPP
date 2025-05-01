const express = require('express')
const router = express.Router()
const Author = require('../models/author')


// All Authors Route
router.get('/', (req, res) => {
  res.render('authors/index', { author: new Author() })
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
    res.redirect('authors');
} catch (err) {
    // Handling errors if any occur during the save
    res.render('authors/index', {
        author: author,
        errorMessage: 'Error Creating Author'
    });
}
})

// New Author Route
router.get('/new', (req, res) => {
  res.render('authors/new')
})

module.exports = router