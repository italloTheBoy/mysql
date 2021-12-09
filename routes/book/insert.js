const db = require('../../model/db')
const { Router } = require('express')
const router = Router()


router.post('/book/insert', (req, res) => {
  const { title, pages } = req.body

  const query = `INSERT INTO ?? (??, ??) VALUES (?, ?);`
  const params = ['books', 'title', 'pages', title, pages]

  try {
    db.query(query, params)
    res.status(200).redirect('/book')

  } catch (err) { console.error(err) }
})


module.exports = router