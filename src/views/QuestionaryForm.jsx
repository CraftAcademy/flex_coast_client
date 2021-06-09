import React from 'react'
import Question from '../components/Inquiry/Question'
import CustomButton from '../components/custom/CustomButton'
import Inquiries from '../modules/Inquiries'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import InquiryEmail from '../components/Inquiry/InquiryEmail'
import InquiryCompanySize from '../components/Inquiry/InquiryCompanySize'
import InquiryOfficeType from '../components/Inquiry/InquiryOfficeType'
import Header from '../components/Header'

const QuestionaryForm = () => {
  const { submitMessage, formData } = useSelector((state) => state)
  const { t } = useTranslation()

  return (
    <>
      <Header />
      <div className='form-container'>
        <h2 className='welcomeMessage' data-cy='welcome-message'>
          {t('welcomeMessage')}
        </h2>

        <InquiryEmail />
        {formData.email && <InquiryCompanySize />}
        {formData.size && <InquiryOfficeType />}
        {submitMessage ? (
          <>
            <Question dataCy='on-submit-message' text={submitMessage} />
          </>
        ) : (
          formData.office_type && (
            <CustomButton
              dataCy='submit-btn'
              onClick={() => Inquiries.create(formData)}>
              {t('submitButton')}
            </CustomButton>
          )
        )}
      </div>
    </>
  )
}

export default QuestionaryForm
