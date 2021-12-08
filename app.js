require('dotenv').config()
const db = require('./model/db')
const path = require('path')
const hbs = require('express-handlebars')
const express = require('express')

// Configuration
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('handlebars', hbs.engine())
app.set('view engine', 'handlebars')

// Routes
const router = require('./routes/router')
app.use(router)

//Listening
db.connect((err) => {
  if (err) return console.error(err)

  const port = process.env.PORT || 3000
  app.listen(port, () => console.log(`Running in http://localhost:${port}`))
})
