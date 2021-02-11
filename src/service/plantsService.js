const plantsData = require('../data/plantsData')

exports.getPlants = function () {
  return plantsData.getPlants()
}

exports.savePlant = function (plant) {
  return plantsData.savePlant(plant)
}

exports.deletePlant = function (id) {
  return plantsData.deletePlant(id)
}