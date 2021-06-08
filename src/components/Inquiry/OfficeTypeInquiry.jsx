import React from 'react'
import Question from '../Question'
import Answer from '../Answer'
import { useTranslation } from 'react-i18next'

const OfficeTypeInquiry = () => {
  const { t } = useTranslation()

  return (
    <div data-cy='office-type-container'>
      <Question text={t('question.officeType')} />
      <Answer
        text={t('answer.officeType')}
        type='toggle-btn'
        questionKey='office_type'
      />
    </div>
  )
}

export default OfficeTypeInquiry
