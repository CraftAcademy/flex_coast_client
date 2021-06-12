import initialState from '../store/initialState'
import { animateScroll } from 'react-scroll'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ANSWERS':
      animateScroll.scrollMore(200)
      let newData = state.formData
      newData[action.payload.key] = action.payload.answer
      return {
        ...state,
        formData: newData,
      }
    case 'SET_SUBMIT_MESSAGE':
      return {
        ...state,
        submitMessage: action.payload,
      }
    case 'SWITCH_ANSWER_FILLED_STATUS':
      let filledAnswers = state.filledAnswers
      filledAnswers[action.payload.key] = action.payload.filled
      return {
        ...state,
        filledAnswers: filledAnswers,
      }
    default:
      return state
  }
}

export default rootReducer
