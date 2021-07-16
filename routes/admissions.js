const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const Admission = require('../models/Admission')

// @route     GET api/
// @desc      Get all
// @access
router.get('/', async (req, res) => {
  try {
    const infos = await Admission.find().sort({ date: -1 })

    res.json(infos)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.post('/', async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { name, mobile, dept, mark, cat, typ } = req.body

  try {
    const newAdmission = new Admission({
      name,
      mobile,
      dept,
      mark,
      cat,
      typ,
    })

    const admissions = await newAdmission.save()

    res.json(admissions)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
