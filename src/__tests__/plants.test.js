const axios = require('axios')

test("Should get posts", async function () {
  const response = await axios({
    url: 'http://localhost:3000/plants',
    method: 'get'
  })

  const plants = response.data

  expect(plants).toHaveLength(3)
} )