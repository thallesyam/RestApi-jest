const bathsService = require('../service/bathsService')

const request = require('../utils/request')
const generate = require('../utils/generate')

test("Should get baths", async function () {
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

test("Should save baths", async function () {
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

test("Should update baths", async function () {
  const bath = await bathsService.saveBath({ 
    name: generate(),
    contact: generate(),
    image: generate(),
    namebath: generate(),
    herbs: [generate()],
    atuation: generate(),
    quantity: 5,
    price: generate(),
  })

  bath.name = generate()
  bath.contact = generate()
  bath.image = generate()
  bath.namebath = generate()
  bath.herbs = [generate()],
  bath.atuation = generate(),
  bath.quantity = 10
  bath.price = generate()

  await request(`http://localhost:3000/baths/${bath.id}`,'put', bath)

  const updateBath = await bathsService.getBath(bath.id)

  expect(updateBath.name).toBe(bath.name)
  expect(updateBath.contact).toBe(bath.contact)
  expect(updateBath.image).toBe(bath.image)
  expect(updateBath.namebath).toBe(bath.namebath)
  expect(updateBath.herbs).toStrictEqual(bath.herbs)
  expect(updateBath.atuation).toBe(bath.atuation)
  expect(updateBath.quantity).toBe(bath.quantity)
  expect(updateBath.price).toBe(bath.price)

  await bathsService.deleteBath(bath.id)

} )

test("Should delete baths", async function () {
  const bath = await bathsService.saveBath({ 
    name: generate(),
    contact: generate(),
    image: generate(),
    namebath: generate(),
    herbs: [generate()],
    atuation: generate(),
    quantity: 5,
    price: generate(),
  })

  await request(`http://localhost:3000/baths/${bath.id}`,'delete')

  const baths = await bathsService.getBaths()

  expect(baths).toHaveLength(0)

} )