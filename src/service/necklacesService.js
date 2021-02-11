const necklacesData = require('../data/necklacesData')

exports.getNecklaces = function () {
  return necklacesData.getNecklaces()
}

exports.saveNecklaces = function (necklaces) {
  return necklacesData.saveNecklaces(necklaces)
}

exports.deleteNecklaces = function (id) {
  return necklacesData.deleteNecklaces(id)
}