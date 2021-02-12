const bathsService = require('../service/bathsService')

const request = require('../utils/request')
const generate = require('../utils/generate')

test("Should get posts", async function () {
  const baths1 = await bathsService.saveBath({ 
    name: generate(),
    contact: generate(),
    image: generate(),
    namebath: generate(),
    herbs: [generate()],
    atuation: generate(),
    quantity: 5,
    price: generate(),
  })
  const baths2 = await bathsService.saveBath({ 
    name: generate(),
    contact: generate(),
    image: generate(),
    namebath: generate(),
    herbs: [generate()],
    atuation: generate(),
    quantity: 5,
    price: generate(),
  })
  const baths3 = await bathsService.saveBath({ 
    name: generate(),
    contact: generate(),
    image: generate(),
    namebath: generate(),
    herbs: [generate()],
    atuation: generate(),
    quantity: 5,
    price: generate(),
  })

  const response = await request('http://localhost:3000/baths','get')

  const baths = response.data

  expect(baths).toHaveLength(3)

  await bathsService.deleteBath(baths1.id)
  await bathsService.deleteBath(baths2.id)
  await bathsService.deleteBath(baths3.id)

} )

test("Should save posts", async function () {
  const data = {    
    name: generate(),
    contact: generate(),
    image: generate(),
    namebath: generate(),
    herbs: [generate()],
    atuation: generate(),
    quantity: 5,
    price: generate(),
  }

  const response = await request('http://localhost:3000/baths','post', data)

  const bath = response.data

  expect(bath.title).toBe(data.title)
  expect(bath.content).toBe(data.content)

  await bathsService.deleteBath(bath.id)

} )