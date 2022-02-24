const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const Sidebar = require('../models/Sidebar')

// @route     GET api/contacts
// @desc      Get all users contacts
router.get('/', async (req, res) => {
  try {
    const sidebars = await Sidebar.find().sort({
      date: -1,
    })
    res.json(sidebars)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/academics', async (req, res) => {
  try {
    const sidebars = await Sidebar.find({ tag: { $in: ['academics'] } }).sort({
      date: -1,
    })
    res.json(sidebars)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/placement', async (req, res) => {
  try {
    const sidebars = await Sidebar.find({ tag: { $in: ['placement'] } }).sort({
      date: -1,
    })
    res.json(sidebars)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})


router.get('/events', async (req, res) => {
  try {
    const sidebars = await Sidebar.find({ tag: { $in: ['events'] } }).sort({
      date: -1,
    })
    res.json(sidebars)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/research', async (req, res) => {
  try {
    const sidebars = await Sidebar.find({ tag: { $in: ['research'] } }).sort({
      date: -1,
    })
    res.json(sidebars)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/ce', async (req, res) => {
  try {
    const sidebars = await Sidebar.find({ tag: { $in: ['ce'] } }).sort({
      date: -1,
    })
    res.json(sidebars)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
router.get('/cse', async (req, res) => {
  try {
    const sidebars = await Sidebar.find({ tag: { $in: ['cse'] } }).sort({
      date: -1,
    })
    res.json(sidebars)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
router.get('/ece', async (req, res) => {
  try {
    const sidebars = await Sidebar.find({ tag: { $in: ['ece'] } }).sort({
      date: -1,
    })
    res.json(sidebars)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
router.get('/eee', async (req, res) => {
  try {
    const sidebars = await Sidebar.find({ tag: { $in: ['eee'] } }).sort({
      date: -1,
    })
    res.json(sidebars)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
router.get('/mba', async (req, res) => {
  try {
    const sidebars = await Sidebar.find({ tag: { $in: ['mba'] } }).sort({
      date: -1,
    })
    res.json(sidebars)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
router.get('/it', async (req, res) => {
  try {
    const sidebars = await Sidebar.find({ tag: { $in: ['it'] } }).sort({
      date: -1,
    })
    res.json(sidebars)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
router.get('/me', async (req, res) => {
  try {
    const sidebars = await Sidebar.find({ tag: { $in: ['me'] } }).sort({
      date: -1,
    })
    res.json(sidebars)
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
  [auth, [check('title', 'Image is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { title, link, tag } = req.body

    try {
      const newSidebar = new Sidebar({
        title,
        link,
        tag,
      })

      const carousel = await newSidebar.save()

      res.json(carousel)
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
  const { title, link, tag } = req.body

  // Build contact object
  const sidebarFields = {}
  if (title) sidebarFields.title = title
  if (link) sidebarFields.link = link
  if (tag) sidebarFields.tag = tag

  try {
    let sidebar = await Sidebar.findById(req.params.id)

    if (!sidebar) return res.status(404).json({ msg: 'sidebar not found' })

    sidebar = await Sidebar.findByIdAndUpdate(
      req.params.id,
      { $set: sidebarFields },
      { new: true },
    )

    res.json(sidebar)
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
    let sidebars = await Sidebar.findById(req.params.id)

    if (!sidebars) return res.status(404).json({ msg: 'Sidebar not found' })

    await Sidebar.findByIdAndRemove(req.params.id)

    res.json({ msg: 'sidebars removed' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
module.exports = router
