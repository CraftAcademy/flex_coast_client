import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton'
import store from '../state/store/configureStore'

const Answer = ({ text, type, placeholder, questionKey }) => {
  const setAnswer = (answer) => {
    store.dispatch({
      type: 'SET_ANSWERS',
      payload: { key: questionKey, answer: answer },
    })
  }

  return (
    <div className='type-field-container'>
      <h3>{text}</h3>
      <input
        data-cy='input'
        //value={answer}
        type={type}
        onChange={(event) => {
          setAnswer(event.target.value)
        }}
        placeholder={placeholder}
      />
      <IconButton className='done-btn' data-cy='done-btn'>
        <ExpandMoreIcon />
      </IconButton>
    </div>
  )
}

export default Answer
