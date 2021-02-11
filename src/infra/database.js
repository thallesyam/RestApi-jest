const pgp = require('pg-promise')()

const db = pgp({
  user: 'postgres',
  password: 'rest-postgres',
  host: '192.168.99.100',
  port: 5432,
  database: 'Nephrolepis'
})

module.exports = db