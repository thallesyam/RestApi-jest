const express = require('express')

const router = express.Router()
const necklacesService = require('../service/necklacesService')

router.get('/necklaces', async (req, res) => {
   const necklaces = await necklacesService.getNecklaces()

   return res.json(necklaces)
})

router.get('/necklaces/:id', async (req, res) => {

})

router.post('/necklaces', async (req, res) => {

})

router.put('/necklaces/:id', async (req, res) => {

})

router.delete('/necklaces/:id', async (req, res) => {

})


module.exports = router