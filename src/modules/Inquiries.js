import axios from 'axios'
import store from '../state/store/configureStore'

const Inquiries = {
  async create(formData) {
    try {
      let params = { inquiry: formData }
      let response = await axios.post('/inquiries', params)
      store.dispatch({
        type: 'SET_SUBMIT_MESSAGE',
        payload: response.data.message,
      })
    } catch (error) {}
  },
}

export default Inquiries
