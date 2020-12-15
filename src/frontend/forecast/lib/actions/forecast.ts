import { getDailyForecast } from '../../../../api/accu-weather'
import { saveState } from '../../../localStorage'
import { ForecastThunk, Forecast } from '../../action-types'
import { CITY_BY_ID } from '../../utils'
import { getAllCitiesForecast } from '../selectors'

export const fetchCitiesForecast = (): ForecastThunk<void> => async (
  dispatch,
  getState
) => {
  const cityIds = Object.keys(CITY_BY_ID).map(Number)

  const currentState = getAllCitiesForecast(getState())

  if (Object.keys(currentState).length > 0) {
    return
  }

  cityIds.forEach((cityId) => {
    dispatch({
      type: Forecast.START_CITY_FORECAST_LOAD,
      cityId,
    })
  })

  const requests = cityIds.map(async (cityId) => {
    try {
      const dailyForecast = await getDailyForecast(cityId)
      dispatch({
        type: Forecast.SET_CITY_FORECAST,
        cityId,
        accuweatherData: dailyForecast,
      })

      // the free key has a cap on the amount of requests that can be made,
      // that's why I'm storing the information in the localStorage
      saveState({
        forecast: { ...getAllCitiesForecast(getState()) },
      })
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
      dispatch({
        type: Forecast.SET_CITY_FORECAST_LOAD_ERROR,
        cityId,
      })
    }
  })

  await Promise.all(requests)
}
