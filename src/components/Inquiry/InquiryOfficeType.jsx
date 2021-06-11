import React from 'react'
import Question from './Question'
import Answer from './Answer'
import { useTranslation } from 'react-i18next'

const InquiryOfficeType = () => {
  const { t } = useTranslation()

  return (
    <div data-cy='office-type-container'>
      <Question text={t('question.officeType')} />
      <Answer
        text={t('answer.officeType')}
        type='toggle-btn'
        value_1='Office'
        value_2='Open Space'
        questionKey='office_type'
        label_1={t('answer.officeLable')}
        dataCy_1='office'
        label_2={t('answer.openSpaceLable')}
        dataCy_2='open-space'
      />
    </div>
  )
}

export default InquiryOfficeType
