const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const Publication = require('../models/Publication')

// @route     GET api/contacts
// @desc      Get all users contacts
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const Publications = await Publication.find().sort({
      date: -1,
    })

    res.json(Publications)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/allPublications', async (req, res) => {
  try {
    const Publications = await Publication.find().sort({
      date: -1,
    })
    res.json(Publications)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/ce', async (req, res) => {
  try {
    const Publications = await Publication.find({ dept: { $in: ['ce'] } }).sort(
      {
        date: -1,
      },
    )
    res.json(Publications)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/cse', async (req, res) => {
  try {
    const Publications = await Publication.find({
      dept: { $in: ['cse'] },
    }).sort({
      date: -1,
    })
    res.json(Publications)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/ece', async (req, res) => {
  try {
    const Publications = await Publication.find({
      dept: { $in: ['ece'] },
    }).sort({
      date: -1,
    })
    res.json(Publications)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/eee', async (req, res) => {
  try {
    const Publications = await Publication.find({
      dept: { $in: ['eee'] },
    }).sort({
      date: -1,
    })
    res.json(Publications)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/it', async (req, res) => {
  try {
    const Publications = await Publication.find({ dept: { $in: ['it'] } }).sort(
      {
        date: -1,
      },
    )
    res.json(Publications)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/me', async (req, res) => {
  try {
    const Publications = await Publication.find({ dept: { $in: ['me'] } }).sort(
      {
        date: -1,
      },
    )
    res.json(Publications)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route     POST api/Publication
// @desc      Add new Publication
// @access    Private
router.post(
  '/',
  [auth, [check('title', 'Title is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { dept, title, journal, link, date } = req.body

    try {
      const newInfo = new Publication({
        dept,
        title,
        journal,
        link,
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

// @route     PUT api/Publication/:id
// @desc      Update Publication
// @access    Private
router.put('/:id', auth, async (req, res) => {
  const { dept, title, journal, link, date } = req.body

  // Build contact object
  const infoFields = {}
  if (dept) infoFields.dept = dept
  if (title) infoFields.title = title
  if (journal) infoFields.journal = journal
  if (link) infoFields.link = link
  if (date) infoFields.value = date

  try {
    let info = await Publication.findById(req.params.id)

    if (!info) return res.status(404).json({ msg: 'Publication not found' })

    info = await Publication.findByIdAndUpdate(
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

// @route     DELETE api/Publication/:id
// @desc      Delete Publication
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let pub = await Publication.findById(req.params.id)

    if (!pub) return res.status(404).json({ msg: 'Publication not found' })

    await Publication.findByIdAndRemove(req.params.id)

    res.json({ msg: 'Publication removed' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
