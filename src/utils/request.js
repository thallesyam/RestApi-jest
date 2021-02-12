const axios = require('axios')

const request = function (url, method, data) {
  return axios({url, method, data})
}

module.exports = request