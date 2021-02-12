const plantsData = require('../data/plantsData')

exports.getPlants = function () {
  return plantsData.getPlants()
}

exports.getPlant = function (id) {
  return plantsData.getPlant(id)
}

exports.savePlant = function (plant) {
  return plantsData.savePlant(plant)
}

exports.updatePlant = function (id, plant) {
  return plantsData.updatePlant(id, plant)
}

exports.deletePlant = function (id) {
  return plantsData.deletePlant(id)
}