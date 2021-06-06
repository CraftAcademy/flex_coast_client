import React, { useState } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton'
import store from '../state/store/configureStore'

const Answer = ({ text, type, placeholder, questionKey }) => {
  const [email, setEmail] = useState('')

  const setAnswer = (event) => {
    event.preventDefault()
    
    store.dispatch({
      type: 'SET_ANSWERS',
      payload: { key: questionKey, answer: email },
    })
  }

  return (
    <div className='type-field-container'>
      <h3>{text}</h3>
      <div>
        <form onSubmit={(event) => setAnswer(event)}>
          <input
            data-cy='input'
            type={type}
            value={email}
            required
            onChange={(event) => {
              setEmail(event.target.value)
            }}
            placeholder={placeholder}
          />

          <IconButton
            type='submit'            
            className='done-btn'
            data-cy='done-btn'>
            <ExpandMoreIcon />
          </IconButton>
        </form>
      </div>
    </div>
  )
}

export default Answer
