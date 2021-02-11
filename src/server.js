const express = require('express')
const plantsRoutes = require('./routes/plantsRoutes')
const bathsRoutes = require('./routes/bathsRoutes')
const necklacesRoutes = require('./routes/necklacesRoutes')

const app = express()

app.use(express.json())

app.use('/', necklacesRoutes)
app.use('/', plantsRoutes)
app.use('/', bathsRoutes)

app.listen(3000)