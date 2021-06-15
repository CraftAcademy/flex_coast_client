import React from 'react'
import Question from './Question'
import Answer from './Answer'
import { useTranslation } from 'react-i18next'

const InquiryOfficeType = () => {
  const { t } = useTranslation()

  const radioButtonData = [
    { value: 'office', label: t('answer.officeLabel'), dataCy: 'office' },
    {
      value: 'open_space',
      label: t('answer.openSpaceLabel'),
      dataCy: 'open-space',
    },
    { value: 'combined', label: t('answer.combinedLabel'), dataCy: 'combined' },
  ]

  return (
    <div data-cy='office-type-container'>
      <Question text={t('question.officeType')} />
      <Answer
        text={t('answer.officeType')}
        type='toggle-btn'
        radioData={radioButtonData}
        questionKey='office_type'
      />
    </div>
  )
}

export default InquiryOfficeType
