const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const Blog = require('../models/Blog')

// @route     GET api/contacts
// @desc      Get all users contacts
// @access    Private
router.get('/', async (req, res) => {
  try {
    const blog = await Blog.find()
    res.json(blog)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/main', async (req, res) => {
  try {
    const blog = await Blog.find().sort({ date: -1 }).limit(4)
    res.json(blog)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/ce', async (req, res) => {
  try {
    const blog = await Blog.find({ dept: { $in: ['ce'] } })
      .sort({ date: -1 })
      .limit(4)
    res.json(blog)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/cse', async (req, res) => {
  try {
    const blog = await Blog.find({ dept: { $in: ['cse'] } })
      .sort({ date: -1 })
      .limit(4)
    res.json(blog)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
router.get('/ece', async (req, res) => {
  try {
    const blog = await Blog.find({ dept: { $in: ['ece'] } })
      .sort({ date: -1 })
      .limit(4)
    res.json(blog)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
router.get('/eee', async (req, res) => {
  try {
    const blog = await Blog.find({ dept: { $in: ['eee'] } })
      .sort({ date: -1 })
      .limit(4)
    res.json(blog)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
router.get('/it', async (req, res) => {
  try {
    const blog = await Blog.find({ dept: { $in: ['it'] } })
      .sort({ date: -1 })
      .limit(4)
    res.json(blog)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
router.get('/me', async (req, res) => {
  try {
    const blog = await Blog.find({ dept: { $in: ['me'] } })
      .sort({ date: -1 })
      .limit(4)
    res.json(blog)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
router.get('/mba', async (req, res) => {
  try {
    const blog = await Blog.find({ dept: { $in: ['mba'] } })
      .sort({ date: -1 })
      .limit(4)
    res.json(blog)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/workshop', async (req, res) => {
  try {
    const blog = await Blog.find({ tag: { $in: ['workshop'] } }).sort(
      'date',
      -1,
    )
    res.json(blog)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/inbound', async (req, res) => {
  try {
    const blog = await Blog.find({ tag: { $in: ['inbound'] } }).sort({
      date: -1,
    })
    res.json(blog)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/outbound', async (req, res) => {
  try {
    const blog = await Blog.find({ tag: { $in: ['outbound'] } }).sort(
      'date',
      -1,
    )
    res.json(blog)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/industrial', async (req, res) => {
  try {
    const blog = await Blog.find({ tag: { $in: ['industrial'] } }).sort(
      'date',
      -1,
    )
    res.json(blog)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/sports', async (req, res) => {
  try {
    const blog = await Blog.find({ tag: { $in: ['sports'] } }).sort({
      date: -1,
    })
    res.json(blog)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route     POST api/blog
// @desc      Add new blog
// @access    Private
router.post(
  '/',
  [auth, [check('img', 'Image is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { img, title, descp, dept, tag, link, value } = req.body

    try {
      const newBlog = new Blog({
        img,
        title,
        descp,
        dept,
        tag,
        link,
        value,
      })

      const blog = await newBlog.save()

      res.json(blog)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  },
)

// @route     PUT api/blog/:id
// @desc      Update blog
// @access    Private
router.put('/:id', auth, async (req, res) => {
  const { img, title, descp, dept, tag, link, value } = req.body

  // Build contact object
  const blogFields = {}
  if (img) blogFields.img = img
  if (title) blogFields.title = title
  if (descp) blogFields.descp = descp
  if (dept) blogFields.dept = dept
  if (tag) blogFields.tag = tag
  if (link) blogFields.link = link
  if (value) blogFields.value = value

  try {
    let blog = await Blog.findById(req.params.id)

    if (!blog) return res.status(404).json({ msg: 'blog not found' })

    blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $set: blogFields },
      { new: true },
    )

    res.json(blog)
  } catch (err) {
    console.error(er.message)
    res.status(500).send('Server Error')
  }
})

// @route     DELETE api/blog/:id
// @desc      Delete blog
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let blog = await Blog.findById(req.params.id)

    if (!blog) return res.status(404).json({ msg: 'Blog not found' })

    await Blog.findByIdAndRemove(req.params.id)

    res.json({ msg: 'blog removed' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
