const { Router } = require('express')
const router = Router()


router.get('/book/form', (req, res) => {
  res.status(200).render('book/form')
})


module.exports = router