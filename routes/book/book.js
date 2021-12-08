const db = require('../../model/db')
const { Router } = require('express')
const router = Router()


router.get('/book', (req, res) => {

  db.query('SELECT title, id FROM books', (err, book) => {
    if (err) throw console.error(err)

    res.status(200).render('book/book', { book })
  })

  
})


module.exports = router