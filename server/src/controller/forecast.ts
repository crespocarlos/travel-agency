import express from 'express'

import { getDailyForecast } from '../service/accu-weather'

const router = express.Router()

router.get('/forecast/:cityId', async (req, res, next) => {
  const cityId = req.params.cityId
  try {
    const forecast = await getDailyForecast(Number(cityId))
    res.send(forecast)
  } catch {
    res.status(400).send({ message: 'Something went wrong' })
  }
})

export default { router }
