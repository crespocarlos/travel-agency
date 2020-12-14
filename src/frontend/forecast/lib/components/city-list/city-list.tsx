import React, { useRef } from 'react'
import classNames from 'classnames'
import { useSelector } from 'react-redux'

import MobileNavbar from '../mobile-navbar/mobile-navbar'
import City from '../city-forecast/city-forecast'
import { getCitiesId } from '../../selectors'

import styles from './city-list.scss'

const css = classNames.bind(styles)

const CityList = () => {
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

  return (
    <div className={css('city-list')}>
      <MobileNavbar onClick={handleNavigationClick} />

      <div className={css('city-list__content')}>
        {cityIds.map((cityId, index) => (
          <div key={cityId} ref={(node) => setRef(node, index)}>
            <City cityId={cityId} />
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CityList
