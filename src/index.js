import React from 'react'
import { Provider } from 'react-redux'
import store from './state/store/configureStore'
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'
import './i18n'
import reportWebVitals from './reportWebVitals'

// axios.defaults.baseURL = 'http://localhost:3000/api'
axios.defaults.baseURL =
  process.env.REACT_APP_STAGE === 'production'
    ? process.env.REACT_APP_API_URL
    : 'https://flex-coast-api-development.herokuapp.com/'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()

if (window.Cypress) {
  window.store = store
}
