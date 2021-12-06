const { Router } = require('express')
const router = Router()


const home = require('./home')
app.use(home)


module.exports = router