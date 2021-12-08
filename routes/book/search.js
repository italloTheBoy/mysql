const db = require('../../model/db')
const { Router } = require('express')
const router = Router()


router.get('/book/search/:id', (req, res) => {
  db.query(`SELECT * FROM books WHERE id = ${req.params.id};`, (err, book) => {
    if (err) throw console.error(err)
    
    res.status(200).render('book/search', { book: book[0] })
  })
})


module.exports = router