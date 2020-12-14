import React, { useState } from 'react'
import classNames from 'classnames'
import { useSelector } from 'react-redux'

import { CITY_BY_ID } from '../../../utils'
import { getCitiesId } from '../../selectors'

import styles from './mobile-navbar.scss'

const css = classNames.bind(styles)

type Props = {
  onClick: (_index: number) => void
}
const MobileNavbar: React.FC<Props> = ({ onClick }) => {
  const cityIds = useSelector(getCitiesId)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNavigationClick = (index: number) => {
    setActiveIndex(index)
    onClick(index)
  }

  return (
    <div className={css('mobile-navbar')}>
      {cityIds.map((p, index) => (
        <div
          key={p}
          className={css('mobile-navbar__item', {
            'mobile-navbar__item--active': index === activeIndex,
          })}
          onClick={() => handleNavigationClick(index)}
        >
          {CITY_BY_ID[Number(p)]}
        </div>
      ))}
    </div>
  )
}

export default MobileNavbar
