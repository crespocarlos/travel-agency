import { DefaultRootState } from 'react-redux'

import { AccuWeatherForecast } from '../api/types'

export type ForecastState = {
  [i: number]: {
    data: AccuWeatherForecast
    error: boolean
  }
}

export type ReduxState = DefaultRootState & {
  forecast: ForecastState
}
