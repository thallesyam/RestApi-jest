const bathsData = require('../data/bathsData')

exports.getBaths = function () {
  return bathsData.getBaths()
}

exports.saveBath = function (baths) {
  return bathsData.saveBath(baths)
}

exports.deleteBath = function (id) {
  return bathsData.deleteBath(id)
}