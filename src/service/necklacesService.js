const necklacesData = require('../data/necklacesData')

exports.getNecklaces = function () {
  return necklacesData.getNecklaces()
}

exports.getNecklace = function (id) {
  return necklacesData.getNecklace(id)
}

exports.saveNecklaces = function (necklaces) {
  return necklacesData.saveNecklaces(necklaces)
}

exports.updateNecklace = function (id, necklace) {
  return necklacesData.updateNecklace(id, necklace)
}

exports.deleteNecklaces = function (id) {
  return necklacesData.deleteNecklaces(id)
}