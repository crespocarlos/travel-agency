import { addHours, parseISO, isAfter } from 'date-fns'

import { ReduxState } from './redux-types'

interface State {}

interface StoredState {
  state: State
  persisted: string
}
export const loadState = (): State | undefined => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    const parsedState: StoredState = JSON.parse(serializedState)

    if (
      parsedState &&
      isAfter(
        addHours(parseISO(parsedState.persisted), 4),
        new Date().getTime()
      )
    ) {
      return parsedState.state
    }
  } catch (err) {
    return undefined
  }
}

export const saveState = (state: ReduxState) => {
  try {
    const serializedState = JSON.stringify({
      state,
      persisted: new Date().toISOString(),
    })
    localStorage.setItem('state', serializedState)
  } catch {
    // eslint-disable-next-line no-console
    console.error('error localStorage')
  }
}
