import React from 'react'
import agent from '../../assets/Jehn.png'

const Question = ({ text, dataCy = 'question' }) => {
  return (
    <div className='question-container'>
      <img src={agent} alt='agent'/>
      <p data-cy={dataCy}>{text}</p>
    </div>
  )
}

export default Question
