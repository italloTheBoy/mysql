const db = require('../../model/db')
const { Router } = require('express')
const router = Router()


router.get('/book/delete/:id', (req, res) => {
  db.query(`DELETE FROM books WHERE id=${req.params.id}`, (err) => {
    if (err) throw console.error(err)

    res.status(200).redirect('/book')
  })
})


module.exports = router