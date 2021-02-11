const axios = require('axios')

test("Should get posts", async function () {
  const response = await axios({
    url: 'http://localhost:3000/baths',
    method: 'get'
  })

  const baths = response.data

  expect(baths).toHaveLength(3)
} )