import React from 'react'
import { useSelector } from 'react-redux'
import Question from './Question'
import CustomButton from '../custom/CustomButton'
import Inquiries from '../../modules/Inquiries'
import InquiryEmail from './InquiryEmail'
import InquiryCompanySize from './InquiryCompanySize'
import InquiryOfficeType from './InquiryOfficeType'
import InquiryCompanyName from './InquiryCompanyName'
import InquiryPeers from './InquiryPeers'
import InquiryLocation from './InquiryLocation'
import InquiryWorkingHours from './InquiryWorkingHours'
import { useTranslation } from 'react-i18next'

const Wizard = () => {
  const { submitMessage, formData } = useSelector((state) => state)
  const { t } = useTranslation()

  

  return (
    <div className='wizard-container' id='wizard-container' data-cy='wizard'>
      <InquiryCompanySize />
      {formData.size && <InquiryOfficeType />}
      {formData.office_type && <InquiryEmail />}
      {formData.email && <InquiryCompanyName />}
      {formData.company && <InquiryPeers />}
      {formData.peers && <InquiryLocation />}
      {formData.locations[0] && <InquiryWorkingHours />}
      {submitMessage ? (
        <>
          <Question dataCy='on-submit-message' text={submitMessage} />
        </>
      ) : (
        formData.flexible && (
          <CustomButton
            dataCy='submit-btn'
            onClick={() => Inquiries.create(formData)}>
            {t('submitButton')}
          </CustomButton>
        )
      )}
    </div>
  )
}

export default Wizard
