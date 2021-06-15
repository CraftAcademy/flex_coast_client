import axios from 'axios'
import store from '../state/store/configureStore'

const Inquiries = {
  async create(formData, setLoading) {
    setLoading(true)
    setTimeout(() => {
      return
    }, 1000000000)
    try {
      let params = { inquiry: formData }
      let response = await axios.post('/inquiries', params)
      store.dispatch({
        type: 'SET_SUBMIT_MESSAGE',
        payload: response.data.message,
      })
    } catch (error) {}
    setLoading(false)
  },
}

export default Inquiries
