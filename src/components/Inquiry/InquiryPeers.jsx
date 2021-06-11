import React from 'react'
import Question from './Question'
import Answer from './Answer'
import { useTranslation } from 'react-i18next'

const InquiryPeers = () => {
  const { t } = useTranslation()

  return (
    <div data-cy='peer-question-container'>
      <Question text={t('question.peers')} />
      <Answer
        type='toggle-btn'
        value_1='No'
        value_2='Yes'
        questionKey='peers'
        label_1={t('answer.peersNegative')}
        dataCy_1='negative'
        label_2={t('answer.peersPositive')}
        dataCy_2='positive'
      />
    </div>
  )
}

export default InquiryPeers
