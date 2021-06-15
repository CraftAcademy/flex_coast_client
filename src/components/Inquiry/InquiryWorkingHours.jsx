import React from 'react'
import Question from './Question'
import Answer from './Answer'
import { useTranslation } from 'react-i18next'

const InquiryOfficeType = () => {
  const { t } = useTranslation()

  return (
    <div data-cy='flexible-question-container'>
      <Question text={t('question.workingHours')} />
      <Answer
        text={t('answer.workingHours')}
        type='toggle-btn'
        values={{value_1: 'false', value_2: 'true'}}
        labels={{label_1: t('answer.fullTimeLable'), label_2: t('answer.flexibleLable')}}
        dataCys={{dataCy_1: 'full-time', dataCy_2: 'flexible'}}       
        questionKey='flexible'        
      />
    </div>
  )
}

export default InquiryOfficeType
