import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import { fetchCitiesForecast } from '../actions/forecast'

import CityList from './city-list/city-list'

const PageRoot = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCitiesForecast())
  }, [])

  return <CityList />
}

export default PageRoot
