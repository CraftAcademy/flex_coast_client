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
        values={{ value_1: 'office', value_2: 'open_space' }}
        labels={{
          label_1: t('answer.officeLable'),
          label_2: t('answer.openSpaceLable'),
        }}
        dataCys={{ dataCy_1: 'office', dataCy_2: 'open-space' }}
        questionKey='office_type'
      />
    </div>
  )
}

export default InquiryOfficeType
