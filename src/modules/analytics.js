import ahoy from 'ahoy.js'

const apiUrl =
  process.env.REACT_APP_STAGE === 'production'
    ? 'https://flex-coast-production.herokuapp.com/api/'
    : 'https://flex-coast-api-development.herokuapp.com/api/'
// const apiUrl = 'http://localhost:3000/api/'

ahoy.configure({
  urlPrefix: apiUrl,
  visitsUrl: 'ahoy/visits',
  eventsUrl: 'ahoy/events',
})

export default ahoy
