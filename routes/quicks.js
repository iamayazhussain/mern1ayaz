const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const Quick = require('../models/Quick')

// @route     GET api/contacts
// @desc      Get all users contacts
// @access
router.get('/', async (req, res) => {
  try {
    const quick = await quick.find().sort({ date: -1 })

    res.json(quick)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/ce', async (req, res) => {
  try {
    const quick = await Quick.find({ tag: { $in: ['ce'] } }).sort({ date: -1 })

    res.json(quick)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/cse', async (req, res) => {
  try {
    const quick = await Quick.find({ tag: { $in: ['cse'] } }).sort({ date: -1 })

    res.json(quick)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/ece', async (req, res) => {
  try {
    const quick = await Quick.find({ tag: { $in: ['ece'] } }).sort({ date: -1 })

    res.json(quick)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/eee', async (req, res) => {
  try {
    const quick = await Quick.find({ tag: { $in: ['eee'] } }).sort({ date: -1 })

    res.json(quick)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/me', async (req, res) => {
  try {
    const quick = await Quick.find({ tag: { $in: ['me'] } }).sort({ date: -1 })

    res.json(quick)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/it', async (req, res) => {
  try {
    const quick = await Quick.find({ tag: { $in: ['it'] } }).sort({ date: -1 })

    res.json(quick)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/mba', async (req, res) => {
  try {
    const quick = await Quick.find({ tag: { $in: ['mba'] } }).sort({ date: -1 })

    res.json(quick)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/academics', async (req, res) => {
  try {
    const quick = await Quick.find({ tag: { $in: ['academics'] } }).sort({
      date: -1,
    })

    res.json(quick)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/events', async (req, res) => {
  try {
    const quick = await Quick.find({ tag: { $in: ['events'] } }).sort({
      date: -1,
    })

    res.json(quick)
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
  [auth, [check('title', 'Title is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { tag, title, link } = req.body

    try {
      const newQuick = new Quick({
        tag,
        title,
        link,
      })

      const quick = await newQuick.save()

      res.json(quick)
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
  const { tag, title, link } = req.body

  // Build contact object
  const quickFields = {}
  if (tag) quickFields.tag = tag
  if (title) quickFields.title = title
  if (link) quickFields.link = link

  try {
    let quick = await Quick.findById(req.params.id)

    if (!quick) return res.status(404).json({ msg: 'quick not found' })

    quick = await Quick.findByIdAndUpdate(
      req.params.id,
      { $set: quickFields },
      { new: true },
    )

    res.json(quick)
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
    let quick = await Quick.findById(req.params.id)

    if (!quick) return res.status(404).json({ msg: 'quick not found' })

    await Quick.findByIdAndRemove(req.params.id)

    res.json({ msg: 'quick removed' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
