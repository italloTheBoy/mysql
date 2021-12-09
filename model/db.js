const mysql = require('mysql')

// Metodo De conexão comum 
// const db = mysql.createConnection({
//   host:     process.env.DB_HOST,
//   user:     process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
// })

const db = mysql.createPool({
  connectionLimit: 10,
  host:     process.env.DB_HOST,
  user:     process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
})

module.exports = db
