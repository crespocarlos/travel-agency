import React, { useRef, useState } from 'react'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core'
import Button from '@material-ui/core/Button'

import { getCitiesId } from '../../selectors'
import CityForecast from '../city-forecast/city-forecast'
import MobileNavbar from '../mobile-navbar/mobile-navbar'

import styles from './city-list.scss'

const css = classNames.bind(styles)

const CityList = () => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const cityIds = useSelector(getCitiesId)

  const refs = useRef<HTMLDivElement[]>(
    Array(cityIds.length).fill(React.createRef())
  )

  const setRef = (node: HTMLDivElement | null, index: number) => {
    if (node) {
      refs.current[index] = node
    }
  }

  const handleNavigationClick = (index: number) => {
    const current = refs.current[index]
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop

    window.scrollTo({
      top: current.getBoundingClientRect().top + scrollTop - 70,
      behavior: 'smooth',
    })
  }

  const handleCardClick = () => {
    setDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setDialogOpen(false)
  }

  return (
    <div className={css('city-list')}>
      <MobileNavbar onClick={handleNavigationClick} />

      <div className={css('city-list__content')}>
        <h1>Forecast</h1>

        <div className={css('city-list__content__wrapper')}>
          {cityIds.map((cityId, index) => (
            <React.Fragment key={cityId}>
              <div ref={(node) => setRef(node, index)}>
                <CityForecast cityId={cityId} onClick={handleCardClick} />
              </div>
              <hr />
            </React.Fragment>
          ))}
        </div>
      </div>
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Ooops'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This feature is not available yet
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default CityList
