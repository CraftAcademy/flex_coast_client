import axios from 'axios'
import store from '../state/store/configureStore'
import ahoy from '../modules/analytics'

const Inquiries = {
  async create(formData, setLoading) {
    setLoading(true)
    setTimeout(() => {
      return
    }, 500)
    try {

      let params = { inquiry: formData }
      let response = await axios.post('/inquiries', params)
      store.dispatch({
        type: 'SET_SUBMIT_MESSAGE',
        payload: response.data.message,
      })      
      ahoy.track(`answer`, {question: 'submit'});
    } catch (error) {}

    setLoading(false)
  },
}

export default Inquiries
