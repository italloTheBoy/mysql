const db = require('../../model/db')
const { Router } = require('express')
const router = Router()


router.get('/book/search/:id', (req, res) => {
  const {id} = req.params

  const query = `SELECT * FROM books WHERE ?? = ?;` 
  const params = ['id', id]

  db.query(query, params, (err, book) => {
    if (err) throw console.error(err)
  
    res.status(200).render('book/search', { book: book[0] })
  })

})


module.exports = router