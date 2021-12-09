const db = require('../../model/db')
const { Router } = require('express')
const router = Router()


router.get('/book/delete/:id', (req, res) => {
  const {id} = req.params

  const query = `DELETE FROM books WHERE ??=?;`
  const params = ['id', id]

  try {
    db.query(query, params)
    res.status(200).redirect('/book')

  } catch (err) {throw console.error(err)}
})


module.exports = router