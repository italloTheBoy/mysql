const db = require('../../model/db')
const { Router } = require('express')
const router = Router()


router.get('/book', (req, res) => {

  const query = 'SELECT ??, ?? FROM books;'
  const params = ['title', 'id']

  try {
    db.query(query, params)
    res.status(200).render('book/book', { book })

  } catch (err) {throw console.error(err)}
})


module.exports = router