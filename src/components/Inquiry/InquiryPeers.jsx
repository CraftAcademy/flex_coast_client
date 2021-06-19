import React from 'react'
import Question from './Question'
import Answer from './Answer'
import { useTranslation } from 'react-i18next'

const InquiryPeers = () => {
  const { t } = useTranslation()

  const radioButtonData = [
    { value: 'no', label: t('answer.peersNegative'), dataCy: 'negative' },
    {
      value: 'yes',
      label: t('answer.peersPositive'),
      dataCy: 'positive',
    },    
    {
      value: 'open minded',
      label: 'Open minded',
      dataCy: 'open-minded',
    }
  ]

  return (
    <div data-cy='peer-question-container'>
      <Question text={t('question.peers')} />
      <Answer
        type='toggle-btn'
        radioData={radioButtonData}
        questionKey='peers'
      />
    </div>
  )
}

export default InquiryPeers
