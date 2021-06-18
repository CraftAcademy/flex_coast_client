import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CustomIconButton from '../custom/CustomIconButton'
import store from '../../state/store/configureStore'
import CustomRadioButton from '../../components/custom/CustomRadioButton'
import CustomSelectInput from '../custom/CustomSelectInput'
import ahoy from '../../modules/analytics'

const Answer = ({
  text,
  type,
  placeholder,
  questionKey,
  radioData,
  className,
}) => {
  const [inputValue, setInputValue] = useState(
    store.getState().formData[questionKey]
  )
  const filled = useSelector((state) => state.filledAnswers[questionKey])
  const setAnswer = (event) => {
    event.preventDefault()

    if (filled) {
      store.dispatch({
        type: 'SWITCH_ANSWER_FILLED_STATUS',
        payload: { key: questionKey, filled: false },
      })
    } else {
      store.dispatch({
        type: 'SWITCH_ANSWER_FILLED_STATUS',
        payload: { key: questionKey, filled: true },
      })
      store.dispatch({
        type: 'SET_ANSWERS',
        payload: { key: questionKey, answer: inputValue },
      })
      ahoyTracking()
    }
  }

  const scroll = () => {
    let container = document.getElementById('wizard-container')
    container.scrollBy({ top: container.offsetHeight, behavior: 'smooth' })
  }

  const ahoyTracking = () => {
    const properties = { question: questionKey, value: inputValue }
    properties[questionKey] = inputValue
    ahoy.track(`answer`, properties)
  }

  useEffect(() => {
    scroll()
    // eslint-disable-next-line
  }, [])

  const chooseInputType = (type) => {
    switch (type) {
      case 'toggle-btn':
        return (
          <CustomRadioButton
            disabled={filled}
            inputValue={inputValue}
            data={radioData}
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
            aria-required={true}
            className={`input ${className}`}
            disabled={filled}
            data-cy='input'
            type={type}
            id='input'
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
