const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const Placement = require('../models/Placement')

// @route     GET api/contacts
// @desc      Get all users contacts
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const Placements = await Placement.find().sort({
      date: -1,
    })

    res.json(Placements)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/allPlacements', async (req, res) => {
  try {
    const Placements = await Placement.find().sort({
      date: -1,
    })
    res.json(Placements)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route     POST api/Placement
// @desc      Add new Placement
// @access    Private
router.post(
  '/',
  [auth, [check('title', 'Title is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { dept, title, journal, link, salary, date } = req.body

    try {
      const newInfo = new Placement({
        dept,
        title,
        journal,
        link,
        salary,
        date,
      })

      const info = await newInfo.save()

      res.json(info)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  },
)

// @route     PUT api/Placement/:id
// @desc      Update Placement
// @access    Private
router.put('/:id', auth, async (req, res) => {
  const { dept, title, journal, link, salary, date } = req.body

  // Build contact object
  const infoFields = {}
  if (dept) infoFields.dept = dept
  if (title) infoFields.title = title
  if (journal) infoFields.journal = journal
  if (link) infoFields.link = link
  if (salary) infoFields.salary = salary
  if (date) infoFields.value = date

  try {
    let info = await Placement.findById(req.params.id)

    if (!info) return res.status(404).json({ msg: 'Placement not found' })

    info = await Placement.findByIdAndUpdate(
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

// @route     DELETE api/Placement/:id
// @desc      Delete Placement
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let pub = await Placement.findById(req.params.id)

    if (!pub) return res.status(404).json({ msg: 'Placement not found' })

    await Placement.findByIdAndRemove(req.params.id)

    res.json({ msg: 'Placement removed' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
