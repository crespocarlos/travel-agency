import { Forecast, ForecastAction } from '../../action-types'
import { ForecastState } from '../../../redux-types'

export const defaultState: ForecastState = {}

export default function forecast(state = defaultState, action: ForecastAction) {
  switch (action.type) {
    case Forecast.START_CITY_FORECAST_LOAD: {
      const { cityId } = action
      return {
        ...state,
        [cityId]: null,
      }
    }

    case Forecast.SET_CITY_FORECAST: {
      const { cityId, accuweatherData } = action
      return {
        ...state,
        [cityId]: {
          data: accuweatherData,
          error: false,
        },
      }
    }

    case Forecast.SET_CITY_FORECAST_LOAD_ERROR: {
      const { cityId } = action
      return {
        ...state,
        [cityId]: {
          data: null,
          error: true,
        },
      }
    }

    default: {
      return state
    }
  }
}
