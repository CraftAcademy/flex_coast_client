import initialState from '../store/initialState'
import locations from '../../assets/Locations'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ANSWERS':
      let newData = state.formData
      newData[action.payload.key] = action.payload.answer
      if (action.payload.key === 'locations' && !action.payload.answer[0]) {
        newData[action.payload.key] = locations.slice(1)
      }
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
