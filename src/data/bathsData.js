const database = require('../infra/database')

exports.getBaths = function () {
  return database.query('select * from baths.baths')
}