const database = require('../infra/database')

exports.getPlants = function () {
  return database.query('select * from plants.plants')
}