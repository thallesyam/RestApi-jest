const crypto = require('crypto')
const axios = require('axios')
const necklacesService = require('../service/necklacesService')

const generate = function () {
  return crypto.randomBytes(20).toString('hex')
}

test("Should get posts", async function () {
  const necklaces1 = await necklacesService.saveNecklaces({ 
    name: generate(),
    contact: generate(),
    image: generate(),
    quantity: 5,
    price: generate(),
  })
  const necklaces2 = await necklacesService.saveNecklaces({ 
    name: generate(),
    contact: generate(),
    image: generate(),
    quantity: 5,
    price: generate(),
  })
  const necklaces3 = await necklacesService.saveNecklaces({ 
    name: generate(),
    contact: generate(),
    image: generate(),
    quantity: 5,
    price: generate(),
  })

  const response = await axios({
    url: 'http://localhost:3000/necklaces',
    method: 'get'
  })

  const necklaces = response.data

  expect(necklaces).toHaveLength(3)

  await necklacesService.deleteNecklaces(necklaces1.id)
  await necklacesService.deleteNecklaces(necklaces2.id)
  await necklacesService.deleteNecklaces(necklaces3.id)

} )