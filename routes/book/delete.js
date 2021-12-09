const db = require('../../model/db')
const { Router } = require('express')
const router = Router()


router.get('/book/delete/:id', (req, res) => {
  const {id} = req.params

  const query = `DELETE FROM books WHERE ??=?;`
  const params = ['id', id]

  db.query(query, params , (err, book) => {
    if (err) throw console.error(err)

    res.status(200).redirect('/book')
  })
})


module.exports = router