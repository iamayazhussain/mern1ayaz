const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const Carousel = require('../models/Carousel')

// @route     GET api/contacts
// @desc      Get all users contacts
// @access    Private
router.get('/', async (req, res) => {
  try {
    const carousels = await Carousel.find()
    res.json(carousels)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
router.get('/ce', async (req, res) => {
  try {
    const carousels = await Carousel.find({ tag: { $in: ['ce'] } })
    res.json(carousels)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/cse', async (req, res) => {
  try {
    const carousels = await Carousel.find({ tag: { $in: ['cse'] } })
    res.json(carousels)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
router.get('/ece', async (req, res) => {
  try {
    const carousels = await Carousel.find({ tag: { $in: ['ece'] } })
    res.json(carousels)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
router.get('/eee', async (req, res) => {
  try {
    const carousels = await Carousel.find({ tag: { $in: ['eee'] } })
    res.json(carousels)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
router.get('/it', async (req, res) => {
  try {
    const carousels = await Carousel.find({ tag: { $in: ['it'] } })
    res.json(carousels)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
router.get('/me', async (req, res) => {
  try {
    const carousels = await Carousel.find({ tag: { $in: ['me'] } })
    res.json(carousels)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
router.get('/mba', async (req, res) => {
  try {
    const carousels = await Carousel.find({ tag: { $in: ['mba'] } })
    res.json(carousels)
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
  [auth, [check('img', 'Image is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { img, title, descp, tag, link, value } = req.body

    try {
      const newCarousel = new Carousel({
        img,
        title,
        descp,
        tag,
        link,
        value,
      })

      const carousel = await newCarousel.save()

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
  const { img, title, descp, tag, link, value } = req.body

  // Build contact object
  const carouselFields = {}
  if (img) carouselFields.img = img
  if (title) carouselFields.title = title
  if (descp) carouselFields.descp = descp
  if (tag) carouselFields.tag = tag
  if (link) carouselFields.link = link
  if (value) carouselFields.value = value

  try {
    let carousel = await Carousel.findById(req.params.id)

    if (!carousel) return res.status(404).json({ msg: 'carousel not found' })

    carousel = await Carousel.findByIdAndUpdate(
      req.params.id,
      { $set: carouselFields },
      { new: true },
    )

    res.json(carousel)
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
    let carousel = await Carousel.findById(req.params.id)

    if (!carousel) return res.status(404).json({ msg: 'carousel not found' })

    await Carousel.findByIdAndRemove(req.params.id)

    res.json({ msg: 'carousel removed' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
