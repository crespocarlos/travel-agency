import React from 'react'
import ReactDOM from 'react-dom'
import 'weather-icons/css/weather-icons.min.css'
import './index.css'
import { Provider } from 'react-redux'
import dotenv from 'dotenv'

import store from './frontend/store'
import App from './frontend/app'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

dotenv.config()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
