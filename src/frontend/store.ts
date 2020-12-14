import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import forecast from './forecast/lib/reducers/forecast'
import { loadState } from './localStorage'

const create = () => {
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const persistedState = loadState()
  return createStore(
    combineReducers({ forecast }),
    persistedState,
    composeWithDevTools(middlewareEnhancer)
  )
}

const store = create()

export default store
