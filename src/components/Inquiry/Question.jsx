import React from 'react'
import agent from '../../assets/Jehn.png'

const Question = ({ text, dataCy = 'question', hero }) => {
  return (
    <>
      <div className='question-container'>
        <img src={agent} alt='agent' />
        <p data-cy={dataCy}>{text}</p>
      </div>
      {hero && (
        <>
          <em>Jens Østgaard</em>
          <div>
            <em>
              <a href='https://www.linkedin.com/in/jensostgaard/'>LinkedIn</a>
            </em>
          </div>
        </>
      )}
    </>
  )
}

export default Question
