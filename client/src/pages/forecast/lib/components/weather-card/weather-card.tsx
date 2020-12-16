import React from 'react'
import { format, parseISO } from 'date-fns'
import classNames from 'classnames/bind'
import Button from '@material-ui/core/Button'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

import { getIcon } from '../../../utils'
import { DailyForecast } from '../../../../../api/types'

import styles from './weather-card.scss'

const css = classNames.bind(styles)

type Props = DailyForecast & {
  onClick: () => void
}

const DEGREE_SYMBOL = '\u00b0'

const WeatherCard: React.FC<Props> = ({ Date, Day, Temperature, onClick }) => (
  <div className={css('card')}>
    <div className={css('card__forecast')}>
      <div className={css('card__forecast__icon')}>
        <i className={`wi ${getIcon(Day.Icon)}`}></i>
      </div>
      <div className={css('card__forecast__details')}>
        <div>
          <div>
            <div className={css('card__forecast__details__day-of-month')}>
              {format(parseISO(Date), 'dd/MM')}
            </div>
            <div className={css('card__forecast__details__day-of-week')}>
              {format(parseISO(Date), 'EEEE')}
            </div>
          </div>
        </div>
        <div>
          <span className={css('card__forecast__details__max')}>
            {Temperature.Maximum.Value}
            {DEGREE_SYMBOL}
          </span>
          <span className={css('card__forecast__details__min')}>
            {`/ ${Temperature.Minimum.Value}`}
            {DEGREE_SYMBOL}
            {Temperature.Maximum.Unit}
          </span>
        </div>
      </div>
    </div>
    <Button
      variant="contained"
      color="primary"
      size="small"
      onClick={onClick}
      endIcon={<ArrowForwardIcon />}
      disableElevation
    >
      book a flight
    </Button>
  </div>
)

export default WeatherCard
