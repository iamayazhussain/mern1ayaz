const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const Exam = require('../models/Exam')

// @route     GET api/Exams
// @desc      Get all users Exams
// @access    Private
router.get('/', async (req, res) => {
  try {
    const exams = await Exam.find({ dept: { $in: ['exam'] } }).sort({
      date: -1,
    })
    res.json(exams)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
