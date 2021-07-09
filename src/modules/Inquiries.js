import axios from 'axios'
import store from '../state/store/configureStore'
import ahoy from '../modules/analytics'
import i18n from '../i18n'

const Inquiries = {
  async create(formData, setLoading) {
    setLoading(true)
    try {
      let params = { inquiry: { ...formData, language: setLanguageValue() } }
      await axios.post('/inquiries', params)
      store.dispatch({
        type: 'SET_SUBMIT_MESSAGE',
        payload: i18n.t('submitMessage'),
      })
      let { consent } = store.getState()
      consent && ahoy.track(`answer`, { question: 'submit' })
    } catch (error) {}
    setLoading(false)
  },

  async sendToHubSpot(formData, setLoading) {
    setLoading(true)
    try {
      let params = { inquiry: { ...formData, language: setLanguageValue() } }
      await axios.post('/inquiries', params)
      store.dispatch({
        type: 'SET_SUBMIT_MESSAGE',
        payload: i18n.t('officeSubmitMessage')
      })
    } catch (error) {}
    setLoading(false)
  },
}

export default Inquiries

const setLanguageValue = () => {
  switch (i18n.language) {
    case 'English':
      return 'en'
    case 'Svenska':
      return 'se'
    default:
      return 'en'
  }
}
