const express = require('express')
const plantsRoutes = require('./routes/plantsRoutes')

const app = express()

app.use(express.json())

app.use('/', plantsRoutes)

app.listen(3000)