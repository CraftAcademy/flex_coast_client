import axios from 'axios'
import store from '../state/store/configureStore'
import ahoy from '../modules/analytics'
import i18n from '../i18n'

const Inquiries = {
  async create(formData) {
    try {
      let params = { inquiry: { ...formData, language: setLanguageValue() } }
      await axios.post('/inquiries', params)
      const action = {
        type: formData.officeProvider ? 'SET_SUCCESS_MESSAGE' : 'SET_SUBMIT_MESSAGE',
        payload: formData.officeProvider ? i18n.t('officeSubmitMessage') : i18n.t('submitMessage'),
      }
      store.dispatch(action)
      let { consent } = store.getState()
      consent && formData.officeProvider ? ahoy.track(`rent_out_button`) : ahoy.track(`answer`, { question: 'submit' })
    } catch (error) {}
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
