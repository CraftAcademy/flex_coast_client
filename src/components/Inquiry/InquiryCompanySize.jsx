import React from 'react'
import Question from './Question'
import Answer from './Answer'
import { useTranslation } from 'react-i18next'

const InquiryCompanySize = () => {
  const { t } = useTranslation()

  return (
    <div  data-cy='company-size-container'>
      <Question text={t('question.size')} />
      <Answer
        text={t('answer.size')}
        type='number'
        placeholder='5'
        questionKey='size'
      />
    </div>
  )
}

export default InquiryCompanySize
