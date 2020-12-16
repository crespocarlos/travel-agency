type Temperature = {
  Value: number
  Unit: string
  [key: string]: any
}

export type DailyForecast = {
  Date: string
  Temperature: {
    Minimum: Temperature
    Maximum: Temperature
  }
  Day: {
    Icon: number
    [key: string]: any
  }
  [key: string]: any
}

export type AccuWeatherForecast = {
  [key: string]: any
  DailyForecasts: Array<DailyForecast>
}
