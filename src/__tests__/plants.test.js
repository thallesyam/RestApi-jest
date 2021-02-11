const crypto = require('crypto')
const axios = require('axios')
const plantsService = require('../service/plantsService')

const generate = function () {
  return crypto.randomBytes(20).toString('hex')
}

test("Should get posts", async function () {
  const plant1 = await plantsService.savePlant({ 
    name: generate(),
    contact: generate(),
    image: generate(),
    plantType: generate(),
    description: generate(),
    quantity: 5,
    price: generate(),
  })
  const plant2 = await plantsService.savePlant({ 
    name: generate(),
    contact: generate(),
    image: generate(),
    plantType: generate(),
    description: generate(),
    quantity: 5,
    price: generate(),
  })
  const plant3 = await plantsService.savePlant({ 
    name: generate(),
    contact: generate(),
    image: generate(),
    plantType: generate(),
    description: generate(),
    quantity: 5,
    price: generate(),
  })

  const response = await axios({
    url: 'http://localhost:3000/plants',
    method: 'get'
  })

  const plants = response.data

  expect(plants).toHaveLength(3)

  await plantsService.deletePlant(plant1.id)
  await plantsService.deletePlant(plant2.id)
  await plantsService.deletePlant(plant3.id)

} )