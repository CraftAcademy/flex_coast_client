import React from 'react'
import Question from './Question'
import Answer from './Answer'
import { useTranslation } from 'react-i18next'

const PhoneNumber = () => {
  const { t } = useTranslation()

  return (
    <div data-cy='phone-question-container'>
      <Question text={t('question.phone')} />
      <Answer
        text={t('answer.phone')}
        type='number'
        placeholder='0712345678'
        className='phone'
        questionKey='phone'
      />
    </div>
  )
}

export default PhoneNumber
