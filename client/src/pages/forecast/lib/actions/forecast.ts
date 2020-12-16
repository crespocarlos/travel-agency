import axios from 'axios'

import request from '../../../../api/request'
import { AccuWeatherForecast } from '../../../../api/types'
import { saveState } from '../../../localStorage'
import { ForecastThunk, Forecast } from '../../action-types'
import { CITY_BY_ID } from '../../utils'
import { getAllCitiesForecast, getCityForecast } from '../selectors'

export const fetchCitiesForecast = (): ForecastThunk<void> => async (
  dispatch,
  getState
) => {
  const cityIds = Object.keys(CITY_BY_ID).map(Number)
  const state = getState()

  const shouldRetrieveData = (cityId: number) => {
    const cityForecast = getCityForecast(state)(cityId)
    return !cityForecast
  }

  const requests = cityIds.filter(shouldRetrieveData).map(async (cityId) => {
    cityIds.forEach((cityId) => {
      dispatch({
        type: Forecast.START_CITY_FORECAST_LOAD,
        cityId,
      })
    })

    try {
      const dailyForecast = await request.get<any, AccuWeatherForecast>(
        `/forecast/${cityId}`
      )
      dispatch({
        type: Forecast.SET_CITY_FORECAST,
        cityId,
        accuweatherData: dailyForecast,
      })

      saveState({
        forecast: { ...getAllCitiesForecast(getState()) },
      })
    } catch (err) {
      dispatch({
        type: Forecast.SET_CITY_FORECAST_LOAD_ERROR,
        cityId,
      })

      // the free AccuWeather api key has a cap on the amount of requests that can be made,
      // that's why I'm storing the results in the localStorage, so the same user doesn't make unecessary requests.
      // The data will be kept for 4 hours.
      // Ideally there should be a cache on the backend that resets daily
      saveState({
        forecast: { ...getAllCitiesForecast(getState()) },
      })
    }
  })

  await Promise.all(requests)
}
