const db = require('../../model/db')
const { Router } = require('express')
const router = Router()


router.post('/book/edit', (req, res) => {
  const {id, title, pages} = req.body

  db.query(`UPDATE books SET title='${title}', pages=${pages} WHERE id='${id}'`,(err) => {
    if (err) console.error(err)
  })

  res.status(200).redirect(`/book/search/${id}`)
})

router.get('/book/edit/:id', (req, res) => {
  db.query(`SELECT * FROM books WHERE id=${req.params.id};`,(err, book) => {
    if (err) throw console.error(err)

    res.status(200).render('book/edit', { book: book[0]})
  })
})


module.exports = router