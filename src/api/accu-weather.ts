import axios from 'axios'

import { AccuWeatherForecast } from './types'

const API_ADDRESS = 'https://dataservice.accuweather.com'

const instance = axios.create({
  baseURL: API_ADDRESS,
  timeout: 1000,
  headers: {
    'Accept-Encoding': 'gzip',
  },
})

instance.interceptors.response.use((response) => response.data)

export const getDailyForecast = (cityId: number) => {
  return instance.get<{}, AccuWeatherForecast>(
    `/forecasts/v1/daily/5day/${cityId}`,
    {
      params: {
        apikey: process.env.REACT_APP_ACCUWEATHER_API_KEY,
        metric: true,
      },
    }
  )
}
