import React from 'react'
import Question from './Question'
import Answer from './Answer'
import { useTranslation } from 'react-i18next'

const InquiryPeers = () => {
  const { t } = useTranslation()

  const radioButtonData = [
    { 
      value: 'now', 
      label: t('answer.start_dateNow'), 
      dataCy: 'now' 
    },
    {
      value: 'quarter',
      label: t('answer.start_dateQuarter'),
      dataCy: 'quarter',
    },
    {
      value: 'unsure',
      label: t('answer.start_dateUnsure'),
      dataCy: 'unsure'
    }
  ]

  return (
    <div data-cy='start-date-question-container'>
      <Question text={t('question.start_date')} />
      <Answer
        type='toggle-btn'
        radioData={radioButtonData}
        questionKey='start_date'
      />
    </div>
  )
}

export default InquiryPeers
