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
        values={{value_1: 'No', value_2: 'Yes'}}
        labels={{label_1: t('answer.peersNegative'), label_2: t('answer.peersPositive')}}
        dataCys={{dataCy_1: 'negative', dataCy_2: 'positive'}}
        questionKey='peers'
        label_1={t('answer.peersNegative')}        
      />
    </div>
  )
}

export default InquiryPeers
