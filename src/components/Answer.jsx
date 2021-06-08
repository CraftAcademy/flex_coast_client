import React, { useState } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import store from '../state/store/configureStore'
import { useTranslation } from 'react-i18next'

const Answer = ({ text, type, placeholder, questionKey }) => {
  const [inputValue, setInputValue] = useState('')
  const [filled, setFilled] = useState(false)
  const { t } = useTranslation()

  const setAnswer = (event) => {
    event.preventDefault()
    if (filled) {
      setFilled(false)
    } else {
      setFilled(true)
      store.dispatch({
        type: 'SET_ANSWERS',
        payload: { key: questionKey, answer: inputValue },
      })
    }
  }

  return (
    <div className='type-field-container'>
      <h3>{text}</h3>
      <div>
        <form onSubmit={(event) => setAnswer(event)}>
          {type === 'toggle-btn' ? (
            <div className='radio-group'>
              <input
                disabled={filled}
                type='radio'
                id='office'
                data-cy='office-btn'
                value='office'
                name='selector'
                required
                onChange={(event) => {
                  setInputValue(event.target.value)
                }}
              />
              <label data-cy='office-lable' for='office'>
                {t('answer.officeLable')}
              </label>
              <input
                disabled={filled}
                type='radio'
                id='open-space'
                data-cy='open-space-btn'
                value='open-space'
                name='selector'
                required
                onChange={(event) => {
                  setInputValue(event.target.value)
                }}
              />
              <label data-cy='open-space-lable' for='open-space'>
                {t('answer.openSpaceLable')}
              </label>
            </div>
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

          <IconButton
            className={filled ? 'done-btn-filled' : 'done-btn'}
            type='submit'
            data-cy='done-btn'>
            {filled ? (
              <EditIcon className={filled ? 'icon-filled' : 'icon'} />
            ) : (
              <ExpandMoreIcon className={filled ? 'icon-filled' : 'icon'} />
            )}
          </IconButton>
        </form>
      </div>
    </div>
  )
}

export default Answer
