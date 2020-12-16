/* eslint-disable no-console */
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

import forecast from './src/controller/forecast'

dotenv.config()

const PORT = process.env.PORT || 4000
const app = express()

// it would be nice to define an Allowed list of trusted origins here
// to make the api more secure
app.use(cors())

app.use(bodyParser.json())

app.use('/api', forecast.router)

app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}`)
})
