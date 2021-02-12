const plantsService = require('../service/plantsService')
const request = require('../utils/request')
const generate = require('../utils/generate')

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

  const response = await request('http://localhost:3000/plants', 'get')

  const plants = response.data

  expect(plants).toHaveLength(3)

  await plantsService.deletePlant(plant1.id)
  await plantsService.deletePlant(plant2.id)
  await plantsService.deletePlant(plant3.id)

} )


test("Should save posts", async function () {
  const data = {    
    name: generate(),
    contact: generate(),
    image: generate(),
    plantType: generate(),
    description: generate(),
    quantity: 5,
    price: generate()
  }

  const response = await request('http://localhost:3000/plants','post', data)

  const plant = response.data

  expect(plant.title).toBe(data.title)
  expect(plant.content).toBe(data.content)

  await plantsService.deletePlant(plant.id)

} )