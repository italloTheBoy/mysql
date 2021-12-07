const db = require('../../model/db')
const { Router } = require('express')
const router = Router()


router.post('/book/insert', (req, res) => {
  const { title, pages } = req.body

  try {
    db.query(`INSERT INTO books (title, pages) VALUES ('${title}', ${pages});`)
    res.status(200).redirect('/')

  } catch (err) { console.error(err) }
})


module.exports = router