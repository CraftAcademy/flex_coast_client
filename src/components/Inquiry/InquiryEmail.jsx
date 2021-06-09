import React from 'react'
import Question from './Question'
import Answer from './Answer'
import { useTranslation } from 'react-i18next'

const InquiryEmail = () => {
  const { t } = useTranslation()

  return (
    <div data-cy='email-container'>
      <Question text={t('question.email')} />
      <Answer
        text={t('answer.email')}
        type='email'
        placeholder='user@company.com'
        questionKey='email'
      />
    </div>
  )
}

export default InquiryEmail
