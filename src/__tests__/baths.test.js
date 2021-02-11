const crypto = require('crypto')
const axios = require('axios')
const bathsService = require('../service/bathsService')

const generate = function () {
  return crypto.randomBytes(20).toString('hex')
}

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

  const response = await axios({
    url: 'http://localhost:3000/baths',
    method: 'get'
  })

  const baths = response.data

  expect(baths).toHaveLength(3)

  await bathsService.deleteBath(baths1.id)
  await bathsService.deleteBath(baths2.id)
  await bathsService.deleteBath(baths3.id)

} )