const plantsService = require('../service/plantsService')
const request = require('../utils/request')
const generate = require('../utils/generate')

test("Should get plants", async function () {
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


test("Should save plants", async function () {
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

test("Should update plants", async function () {
  const plant = await plantsService.savePlant({ 
    name: generate(),
    contact: generate(),
    image: generate(),
    plantType: generate(),
    description: generate(),
    quantity: 5,
    price: generate(),
  })

  plant.name = generate()
  plant.contact = generate()
  plant.image = generate()
  plant.plantType = generate()
  plant.description = generate()
  plant.quantity = 10
  plant.price = generate()

  await request(`http://localhost:3000/plants/${plant.id}`,'put', plant)

  const updatePlant = await plantsService.getPlant(plant.id)

  expect(updatePlant.name).toBe(plant.name)
  expect(updatePlant.contact).toBe(plant.contact)
  expect(updatePlant.image).toBe(plant.image)
  expect(updatePlant.planttype).toBe(plant.plantType)
  expect(updatePlant.description).toBe(plant.description)
  expect(updatePlant.price).toBe(plant.price)

  await plantsService.deletePlant(plant.id)

} )

test("Should delete baths", async function () {
  const plant = await plantsService.savePlant({ 
    name: generate(),
    contact: generate(),
    image: generate(),
    plantType: generate(),
    description: generate(),
    quantity: 5,
    price: generate()
  })

  await request(`http://localhost:3000/plants/${plant.id}`,'delete')

  const plants = await plantsService.getPlants()

  expect(plants).toHaveLength(0)

} )