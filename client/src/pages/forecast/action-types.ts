import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { AccuWeatherForecast } from '../../api/types'
import { ReduxState } from '../redux-types'

export enum Forecast {
  START_CITY_FORECAST_LOAD = '@forecast/START_CITY_FORECAST_LOAD',
  SET_CITY_FORECAST = '@forecast/SET_CITY_FORECAST',
  SET_CITY_FORECAST_LOAD_ERROR = '@forecast/SET_CITY_FORECAST_LOAD_ERROR',
}

type StartCityForecastLoad = {
  type: Forecast.START_CITY_FORECAST_LOAD
  cityId: number
}

type SetCityForecast = {
  type: Forecast.SET_CITY_FORECAST
  cityId: number
  accuweatherData: AccuWeatherForecast
}

type StartCityForecastLoadError = {
  type: Forecast.SET_CITY_FORECAST_LOAD_ERROR
  cityId: number
}

export type ForecastAction =
  | StartCityForecastLoad
  | SetCityForecast
  | StartCityForecastLoadError

export type ForecastThunk<R, A extends Action = ForecastAction> = ThunkAction<
  Promise<R>,
  ReduxState,
  null,
  A
>
