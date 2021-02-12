const necklacesService = require('../service/necklacesService')

const request = require('../utils/request')
const generate = require('../utils/generate')

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

  const response = await request('http://localhost:3000/necklaces', 'get')

  const necklaces = response.data

  expect(necklaces).toHaveLength(3)

  await necklacesService.deleteNecklaces(necklaces1.id)
  await necklacesService.deleteNecklaces(necklaces2.id)
  await necklacesService.deleteNecklaces(necklaces3.id)

} )

test("Should save posts", async function () {
  const data = {    
    name: generate(),
    contact: generate(),
    image: generate(),
    quantity: 5,
    price: generate(),
  }

  const response = await request('http://localhost:3000/necklaces','post', data)

  const necklace = response.data

  expect(necklace.title).toBe(data.title)
  expect(necklace.content).toBe(data.content)

  await necklacesService.deleteNecklaces(necklace.id)

} )