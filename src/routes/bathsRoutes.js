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
   const bath = req.body
   
   const newBath = await bathsService.saveBath(bath)

   res.json(newBath)
})

router.put('/baths/:id', async (req, res) => {
   const bath = req.body
   await bathsService.updateBath(req.params.id, bath)
   res.end()
})

router.delete('/baths/:id', async (req, res) => {
   await bathsService.deleteBath(req.params.id)
   res.end()
})


module.exports = router