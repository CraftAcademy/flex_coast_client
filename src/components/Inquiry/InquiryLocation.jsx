import React from 'react'
import Question from './Question'
import Answer from './Answer'
import { useTranslation } from 'react-i18next'

const InquiryLocation = () => {
  const { t } = useTranslation()

  return (
    <div
      data-cy='location-question-container'
      className='location-question-container'>
      <Question text={t('question.location')} />
      <Answer
        text=''
        type='multi-select'
        placeholder='Choose locations'
        questionKey='locations'
      />
    </div>
  )
}

export default InquiryLocation
