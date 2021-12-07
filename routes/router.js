const { Router } = require('express')
const router = Router()


const home = require('./home')
router.use(home)


module.exports = router