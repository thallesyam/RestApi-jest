const database = require('../infra/database')

exports.getNecklaces = function () {
  return database.query('select * from necklaces.necklaces')
}