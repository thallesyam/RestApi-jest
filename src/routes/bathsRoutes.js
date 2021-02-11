const express = require('express')

const router = express.Router()
const bathsService = require('../service/bathsService')

router.get('/baths', async (req, res) => {
   const baths = await bathsService.getBaths()

   return res.json(baths)
})

router.get('/baths/:id', async (req, res) => {

})

router.post('/baths', async (req, res) => {

})

router.put('/baths/:id', async (req, res) => {

})

router.delete('/baths/:id', async (req, res) => {

})


module.exports = router