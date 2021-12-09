const db = require('../../model/db')
const { Router } = require('express')
const router = Router()


router.get('/book/search/:id', (req, res) => {
  const {id} = req.params

  const query = `SELECT * FROM books WHERE ?? = ?;` 
  const params = ['id', id]

  try {
    db.query(query, params)
    res.status(200).render('book/search', { book: book[0] })

  } catch (err) {throw console.error(err)}
})


module.exports = router