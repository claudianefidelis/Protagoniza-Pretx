require('dotenv').config()
const express = require('express')
const cors = require('cors')
const projetoRoutes = require('./routes/projetosRoutes')
const app = express()
const mongoose = require('./database/mongooseConnect')
const projetosRoutesModel = require('./routes/projetosRoutesModel')
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');


app.use(express.json())

app.use(cors())
app.use('/projetos', projetoRoutes)
app.use(projetosRoutesModel)
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerFile));

mongoose.connect()





module.exports = app
