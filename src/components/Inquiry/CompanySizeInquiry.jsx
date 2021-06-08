import React from 'react'
import Question from '../Question'
import Answer from '../Answer'
import { useTranslation } from 'react-i18next'

const CompanySizeInquiry = () => {
  const { t } = useTranslation()

  return (
    <div data-cy='company-size-container'>
      <Question text={t('question.size')} />
      <Answer
        text={t('answer.size')}
        type='number'
        placeholder='100'
        questionKey='size'
      />
    </div>
  )
}

export default CompanySizeInquiry
