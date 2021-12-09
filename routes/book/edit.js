const db = require('../../model/db')
const { Router } = require('express')
const router = Router()


router.post('/book/edit', (req, res) => {
  const {id, title, pages} = req.body

  const query = `UPDATE ?? SET ??=?, ??=? WHERE ??=?;`
  const params = ['books', 'title', title, 'pages', pages, 'id', id]

  db.query(query, params,(err) => {
    if (err) console.error(err)
  })

  res.status(200).redirect(`/book/search/${id}`)
})

router.get('/book/edit/:id', (req, res) => {
  const {id} = req.params
  
  const query = `SELECT * FROM books WHERE ??=?;`
  const params = ['id', id]

  db.query(query, params , (err, book) => {
    if (err) throw console.error(err)
    
    res.status(200).render('book/edit', { book: book[0]})
  })
})


module.exports = router