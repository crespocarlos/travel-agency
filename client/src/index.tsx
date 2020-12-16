import React from 'react'
import ReactDOM from 'react-dom'
import 'weather-icons/css/weather-icons.min.css'
import './index.css'
import { Provider } from 'react-redux'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'

import store from './pages/store'
import App from './pages/app'
import reportWebVitals from './reportWebVitals'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#10bf53',
      contrastText: '#ffffff',
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
