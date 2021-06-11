import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CustomIconButton from '../custom/CustomIconButton'
import store from '../../state/store/configureStore'
import { useTranslation } from 'react-i18next'
import CustomRadioButton from '../../components/custom/CustomRadioButton'

const Answer = ({
  text,
  type,
  placeholder,
  questionKey,
  label_1,
  label_2,
  dataCy_1,
  dataCy_2,
  value_1,
  value_2,
}) => {
  const [inputValue, setInputValue] = useState(
    store.getState().formData[questionKey]
  )
  const { t } = useTranslation()
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
    }
  }

  return (
    <div className='answer-container'>
      <h3>{text}</h3>

      <form
        className='answer-form-container'
        onSubmit={(event) => setAnswer(event)}>
        {type === 'toggle-btn' ? (
          <CustomRadioButton
            disabled={filled}
            radio_value={inputValue}
            value_1={value_1}
            value_2={value_2}
            label_1={label_1}
            dataCy_1={dataCy_1}
            label_2={label_2}
            dataCy_2={dataCy_2}
            onChange={(event) => {
              setInputValue(event.target.value)
            }}
          />
        ) : (
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
        )}

        <CustomIconButton toggle={filled} />
      </form>
    </div>
  )
}

export default Answer
