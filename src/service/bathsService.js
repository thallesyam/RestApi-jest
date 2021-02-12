const bathsData = require('../data/bathsData')

exports.getBaths = function () {
  return bathsData.getBaths()
}

exports.getBath = function (id) {
  return bathsData.getBath(id)
}

exports.saveBath = function (baths) {
  return bathsData.saveBath(baths)
}

exports.updateBath = function (id, bath) {
  return bathsData.updateBath(id, bath)
}

exports.deleteBath = function (id) {
  return bathsData.deleteBath(id)
}