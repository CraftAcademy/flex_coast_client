import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { animateScroll } from 'react-scroll'
import CustomIconButton from '../custom/CustomIconButton'
import store from '../../state/store/configureStore'
import CustomRadioButton from '../../components/custom/CustomRadioButton'
import CustomSelectInput from '../custom/CustomSelectInput'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const Answer = ({
  text,
  type,
  placeholder,
  questionKey,
  labels,
  dataCys,
  values,
}) => {
  const [inputValue, setInputValue] = useState(
    store.getState().formData[questionKey]
  )
  const filled = useSelector((state) => state.filledAnswers[questionKey])
  const isSmall = useMediaQuery('(max-width:620px)')
  const setAnswer = (event) => {
    event.preventDefault()

    if (filled) {
      store.dispatch({
        type: 'SWITCH_ANSWER_FILLED_STATUS',
        payload: { key: questionKey, filled: false },
      })
    } else {
      animateScroll.scrollMore(isSmall ? 280 : 200)
      store.dispatch({
        type: 'SWITCH_ANSWER_FILLED_STATUS',
        payload: { key: questionKey, filled: true },
      })
      store.dispatch({
        type: 'SET_ANSWERS',
        payload: { key: questionKey, answer: inputValue },
      })
    }
  }
  const chooseInputType = (type) => {
    switch (type) {
      case 'toggle-btn':
        return (
          <CustomRadioButton
            disabled={filled}
            radio_value={inputValue}
            values={values}
            labels={labels}
            dataCys={dataCys}
            onChange={(event) => {
              setInputValue(event.target.value)
            }}
          />
        )
      case 'multi-select':
        return (
          <CustomSelectInput
            disabled={filled}
            locationValue={inputValue}
            setInputValue={setInputValue}
          />
        )
      default:
        return (
          <input
            className={'input'}
            disabled={filled}
            data-cy='input'
            type={type}
            value={inputValue}
            required
            onChange={(event) => {
              setInputValue(event.target.value)
            }}
            placeholder={placeholder}
          />
        )
    }
  }
  return (
    <div className='answer-container'>
      <h3>{text}</h3>
      <form
        className='answer-form-container'
        onSubmit={(event) => setAnswer(event)}>
        {chooseInputType(type)}
        <CustomIconButton toggle={filled} />
      </form>
    </div>
  )
}
export default Answer
