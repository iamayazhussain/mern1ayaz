const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const Syllab = require('../models/Syllab')

// @route     GET api/contacts
// @desc      Get all users contacts
// @access    Private
router.get('/', async (req, res) => {
  try {
    const syllabs = await Syllab.find().sort({ date: -1 })
    res.json(syllabs)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/ce', async (req, res) => {
  try {
    const syllabs = await Syllab.find({ dept: { $in: ['ce'] } })
    res.json(syllabs)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/cse', async (req, res) => {
  try {
    const syllabs = await Syllab.find({ dept: { $in: ['cse'] } })
    res.json(syllabs)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
router.get('/ece', async (req, res) => {
  try {
    const syllabs = await Syllab.find({ dept: { $in: ['ece'] } })
    res.json(syllabs)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
router.get('/eee', async (req, res) => {
  try {
    const syllabs = await Syllab.find({ dept: { $in: ['eee'] } })
    res.json(syllabs)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
router.get('/it', async (req, res) => {
  try {
    const syllabs = await Syllab.find({ dept: { $in: ['it'] } })
    res.json(syllabs)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
router.get('/me', async (req, res) => {
  try {
    const syllabs = await Syllab.find({ dept: { $in: ['me'] } })
    res.json(syllabs)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
router.get('/mba', async (req, res) => {
  try {
    const syllabs = await Syllab.find({ dept: { $in: ['mba'] } })
    res.json(syllabs)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route     POST api/carousel
// @desc      Add new carousel
// @access    Private
router.post(
  '/',
  [auth, [check('dept', 'Dept is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { dept, sem, type, syllabus } = req.body

    try {
      const newSyllabus = new Syllab({
        dept,
        sem,
        type,
        syllabus,
      })

      const syllabs = await newSyllabus.save()

      res.json(syllabs)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  },
)

// @route     PUT api/carousel/:id
// @desc      Update carousel
// @access    Private
router.put('/:id', auth, async (req, res) => {
  const { dept, sem, type, syllabus } = req.body

  // Build contact object
  const syllabusFields = {}
  if (dept) syllabusFields.dept = dept
  if (sem) syllabusFields.sem = sem
  if (type) syllabusFields.type = type
  if (syllabus) syllabusFields.syllabus = syllabus

  try {
    let syllabus = await Syllab.findById(req.params.id)

    if (!syllabus) return res.status(404).json({ msg: 'Syllabus not found' })

    syllabus = await Syllab.findByIdAndUpdate(
      req.params.id,
      { $set: syllabusFields },
      { new: true },
    )

    res.json(syllabus)
  } catch (err) {
    console.error(er.message)
    res.status(500).send('Server Error')
  }
})

// @route     DELETE api/carousel/:id
// @desc      Delete carousel
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let syllab = await Syllab.findById(req.params.id)

    if (!syllab) return res.status(404).json({ msg: 'Syllabus not found' })

    await Syllab.findByIdAndRemove(req.params.id)

    res.json({ msg: 'Syllabus removed' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
