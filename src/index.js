import React from 'react'
import { Provider } from 'react-redux'
import store from './state/store/configureStore'
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'
import './i18n'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'

axios.defaults.baseURL = 'https://flex-coast-development.herokuapp.com/api'
axios.defaults.baseURL =
  process.env.REACT_APP_STAGE === 'production'
    ? 'https://flex-coast-production.herokuapp.com/api'
    : 'https://flex-coast-development.herokuapp.com/api'

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)

reportWebVitals()

if (window.Cypress) {
  window.store = store
}
