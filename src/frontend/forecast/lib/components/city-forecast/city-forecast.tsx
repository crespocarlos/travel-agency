import React from 'react'
import classNames from 'classnames/bind'
import { useSelector } from 'react-redux'
import { CircularProgress } from '@material-ui/core'

import WeatherCard from '../weather-card/weather-card'
import { CITY_BY_ID } from '../../../utils'
import { getCityForecast } from '../../selectors'
import { ReduxState } from '../../../../redux-types'

import styles from './city-forecast.scss'

const css = classNames.bind(styles)

type Props = {
  cityId: number
}

const City: React.FC<Props> = ({ cityId }) => {
  const dailyForecast = useSelector((state: ReduxState) =>
    getCityForecast(state)(cityId)
  )

  return (
    <div className={css('city-forecast')}>
      <h2>{CITY_BY_ID[cityId]}</h2>
      <div className={css('city-forecast__dates')}>
        {dailyForecast ? (
          dailyForecast.error ? (
            <>{'Something went wrong :('}</>
          ) : (
            dailyForecast.data.DailyForecasts.map((p) => (
              <WeatherCard {...p} key={p.Date} />
            ))
          )
        ) : (
          <CircularProgress />
        )}
      </div>
    </div>
  )
}

export default City
