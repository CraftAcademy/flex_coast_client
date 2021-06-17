import axios from 'axios'
import store from '../state/store/configureStore'
import ahoy from '../modules/analytics'
import i18n from '../i18n'

const Inquiries = {
  async create(formData, setLoading) {
    setLoading(true)
    try {
      let params = { inquiry: formData }
      debugger
      await axios.post('/inquiries', params)
      store.dispatch({
        type: 'SET_SUBMIT_MESSAGE',
        payload: i18n.t('submitMessage'),
      })
      ahoy.track(`answer`, { question: 'submit' })
    } catch (error) {}

    setLoading(false)
  },
}

export default Inquiries
