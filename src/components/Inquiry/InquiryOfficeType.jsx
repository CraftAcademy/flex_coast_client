import React from 'react'
import Question from './Question'
import Answer from './Answer'
import { useTranslation } from 'react-i18next'

const InquiryOfficeType = () => {
  const { t } = useTranslation()

  const radioButtonData = [
    {
      value: 'office_space',
      label: t('answer.officeLabel'),
      dataCy: 'office-space',
    },
    {
      value: 'office_room',
      label: t('answer.officeRoom'),
      dataCy: 'office-room',
    },
    {
      value: 'fixed_space',
      label: t('answer.fixedOfficeSpace'),
      dataCy: 'fixed-space',
    },
    {
      value: 'flexible_space',
      label: t('answer.flexibleOfficeSpace'),
      dataCy: 'flexible-space',
    },
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
