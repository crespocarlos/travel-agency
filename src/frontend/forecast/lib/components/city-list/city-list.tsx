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
import City from '../city-forecast/city-forecast'
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
      top: current.getBoundingClientRect().top + scrollTop - 50,
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
        <h1>Weather Forecast</h1>
        {cityIds.map((cityId, index) => (
          <div key={cityId} ref={(node) => setRef(node, index)}>
            <City cityId={cityId} onClick={handleCardClick} />
            <hr />
          </div>
        ))}
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
