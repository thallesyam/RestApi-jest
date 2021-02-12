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
   const plant = req.body
   
   const newPlant = await plantsService.savePlant(plant)

   res.json(newPlant)
})

router.put('/plants/:id', async (req, res) => {
   const plant = req.body
   await plantsService.updatePlant(req.params.id, plant)
   res.end()
})

router.delete('/plants/:id', async (req, res) => {

})


module.exports = router