import React from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import Wizard from '../components/Inquiry/Wizard'

const QuestionaryForm = () => {
  const { t } = useTranslation()

  return (
    <>
      <Header />
      <div className='form-container'>
        <h2 className='welcomeMessage' data-cy='welcome-message'>
          {t('welcomeMessage')}
        </h2>
        <Wizard />
      </div>
    </>
  )
}

export default QuestionaryForm
