const express = require('express')

const router = express.Router()
const plantsData = require('../service/plantsService')

router.get('/plants', async (req, res) => {
   const plants = await plantsData.getPlants()

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