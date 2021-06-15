import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Question from './Question'
import CustomButton from '../custom/CustomButton'
import Inquiries from '../../modules/Inquiries'
import InquiryEmail from './InquiryEmail'
import InquiryCompanySize from './InquiryCompanySize'
import InquiryOfficeType from './InquiryOfficeType'
import InquiryPhoneNumber from './InquiryPhoneNumber'
import InquiryPeers from './InquiryPeers'
import InquiryLocation from './InquiryLocation'
import InquiryWorkingHours from './InquiryWorkingHours'
import { useTranslation } from 'react-i18next'

const Wizard = () => {
  const { submitMessage, formData } = useSelector((state) => state)
  const [loading, setLoading] = useState(false)
  const { t } = useTranslation()

  return (
    <div
      className='wizard-container'
      id='wizard-container'
      data-cy='wizard'
      tabindex='0'>
      {<InquiryCompanySize />}
      {formData.size && <InquiryOfficeType />}
      {formData.office_type && <InquiryEmail />}
      {formData.email && <InquiryPeers />}
      {formData.peers && <InquiryLocation />}
      {formData.locations[0] && <InquiryWorkingHours />}
      {formData.flexible && <InquiryPhoneNumber />}

      {submitMessage ? (
        <>
          <Question dataCy='on-submit-message' text={submitMessage} />
        </>
      ) : (
        formData.phone && (
          <div className='submit-container'>
            <CustomButton
              loading={loading}
              submit
              dataCy='submit-btn'
              onClick={() => Inquiries.create(formData, setLoading)}>
              {t('submitButton')}
            </CustomButton>
          </div>
        )
      )}
    </div>
  )
}

export default Wizard
