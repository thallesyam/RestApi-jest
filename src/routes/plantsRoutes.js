const express = require('express')

const router = express.Router()
const plantsService = require('../service/plantsService')

router.get('/plants', async (req, res) => {
   const plants = await plantsService.getPlants()

   return res.json(plants)
})

router.get('/plants/:id', async (req, res) => {

})

router.post('/plants', async (req, res) => {

})

router.put('/plants/:id', async (req, res) => {

})

router.delete('/plants/:id', async (req, res) => {

})


module.exports = router