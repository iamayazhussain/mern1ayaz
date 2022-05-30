const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const Book = require('../models/Book')

// @route     GET api/Book
// @desc      Get all books
// @access    Private
router.get('/',  async (req, res) => {
  try {
    const Books = await Book.find().sort({
      date: -1,
    })

    res.json(Books)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})




module.exports = router
