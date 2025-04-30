const express = require('express')
const router = express.Router()
const Author = require('../models/author')


// All Authors Route
router.get('/', (req, res) => {
  res.render('authors/index')
})

// New Author Route
router.get('/new', (req, res) => {
  res.render('authors/new', { author: new Author() })
})

// Create Author Route
router.post('/', async (req, res) => {
  const author = new Author({
    name: req.body.name
  })
  try {
    // Saving the author and awaiting the result
    const newAuthor = await author.save();
    // everything in Mongoose and MongoDB is done asynchronously so we need to use
    // await in order to wait for that asynchronous call to be completed.

    // Redirecting to the authors page (or wherever you want)
    res.redirect('authors');
} catch (err) {
    // Handling errors if any occur during the save
    res.render('authors/new', {
        author: author,
        errorMessage: 'Error Creating Author'
    });
}
})


module.exports = router