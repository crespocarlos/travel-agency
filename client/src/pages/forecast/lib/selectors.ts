import { createSelector } from 'reselect'

import { ForecastState, ReduxState } from '../../redux-types'
import { CITY_BY_ID } from '../utils'

export const getAllCitiesForecast = (state: ReduxState): ForecastState => {
  return state.forecast
}

export const getCitiesId = createSelector([getAllCitiesForecast], (forecast) =>
  Object.entries(forecast)
    .sort((a, b) =>
      CITY_BY_ID[Number(a[0])].localeCompare(CITY_BY_ID[Number(b[0])])
    )
    .map(([key]) => Number(key))
)

export const getCityForecast = createSelector(
  [getAllCitiesForecast],
  (forecast) => (cityId: number) => forecast[cityId]
)
