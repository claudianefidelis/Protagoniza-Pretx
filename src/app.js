require('dotenv').config()
const express = require('express')
const cors = require('cors')
const projetoRoutes = require('./routes/projetosRoutes.js')
const app = express()
const mongoose = require('./database/mongooseConnect.js')
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');
const index = require('./routes/index.js')


app.use(express.json())
app.use(cors())
app.use(projetoRoutes)
app.use('/', index)
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerFile));


mongoose.connect()





module.exports = app
