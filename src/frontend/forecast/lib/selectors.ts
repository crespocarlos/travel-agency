import { createSelector } from 'reselect'

import { ForecastState, ReduxState } from '../../redux-types'

export const getAllCitiesForecast = (state: ReduxState): ForecastState => {
  return state.forecast
}

export const getCitiesId = createSelector([getAllCitiesForecast], (forecast) =>
  Object.keys(forecast).map(Number)
)

export const getCityForecast = createSelector(
  [getAllCitiesForecast],
  (forecast) => (cityId: number) => forecast[cityId]
)
