const { Router } = require('express')
const router = Router()


const home = require('./home')
router.use(home)

const bookForm = require('./book/form')
router.use(bookForm)

const bookInsert = require('./book/insert')
router.use(bookInsert)

module.exports = router