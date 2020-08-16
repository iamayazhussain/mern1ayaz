const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const Info = require('../models/Info')

// @route     GET api/contacts
// @desc      Get all users contacts
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const infos = await Info.find()
    res.json(infos)
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

    const { tag, title, link, value } = req.body

    try {
      const newInfo = new Info({
        tag,
        title,
        link,
        value,
      })

      const info = await newInfo.save()

      res.json(info)
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
  const { tag, title, link, value } = req.body

  // Build contact object
  const infoFields = {}
  if (tag) infoFields.tag = tag
  if (title) infoFields.title = title
  if (link) infoFields.link = link
  if (value) infoFields.value = value

  try {
    let info = await Info.findById(req.params.id)

    if (!info) return res.status(404).json({ msg: 'Info not found' })

    info = await Info.findByIdAndUpdate(
      req.params.id,
      { $set: infoFields },
      { new: true },
    )

    res.json(info)
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
    let info = await Info.findById(req.params.id)

    if (!info) return res.status(404).json({ msg: 'info not found' })

    await Info.findByIdAndRemove(req.params.id)

    res.json({ msg: 'info removed' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
