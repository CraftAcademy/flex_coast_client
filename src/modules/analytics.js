import ahoy from 'ahoy.js'

const apiUrl = process.env.REACT_APP_API_URL

ahoy.configure({
  urlPrefix: apiUrl,
  visitsUrl: 'ahoy/visits',
  eventsUrl: 'ahoy/events',
})

export default ahoy
