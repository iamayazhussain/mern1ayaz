const express = require('express')
const connectDB = require('./config/db')
const path = require('path')

const app = express()

// Connect Database
connectDB()

// Init Middleware
app.use(express.json({ extended: false }))

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))
app.use('/api/carousels', require('./routes/carousels'))
app.use('/api/infos', require('./routes/infos'))
app.use('/api/syllabs', require('./routes/syllabs'))
app.use('/api/blogs', require('./routes/blogs'))

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')),
  )
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
