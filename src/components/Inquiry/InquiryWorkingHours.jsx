import React from 'react'
import Question from './Question'
import Answer from './Answer'
import { useTranslation } from 'react-i18next'

const InquiryOfficeType = () => {
  const { t } = useTranslation()

  const radioButtonData = [
    { value: 'false', label: t('answer.fullTimeLabel'), dataCy: 'full-time' },
    {
      value: 'true',
      label: t('answer.flexibleLabel'),
      dataCy: 'flexible',
    },
    { value: 'mixed', label: t('answer.mixedLabel'), dataCy: 'mixed' },
  ]

  return (
    <div data-cy='flexible-question-container'>
      <Question text={t('question.workingHours')} />
      <Answer
        text={t('answer.workingHours')}
        type='toggle-btn'
        radioData={radioButtonData}
        questionKey='flexible'
      />
    </div>
  )
}

export default InquiryOfficeType
