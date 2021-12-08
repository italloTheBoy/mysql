const { Router } = require('express')
const router = Router()


const home = require('./home')
router.use(home)

const book = require('./book/book')
router.use(book)

const bookForm = require('./book/form')
router.use(bookForm)

const bookInsert = require('./book/insert')
router.use(bookInsert)

const bookSearch = require('./book/search')
router.use(bookSearch)

const bookEdit = require('./book/edit')
router.use(bookEdit)

const bookDelete = require('./book/delete')
router.use(bookDelete)

module.exports = router