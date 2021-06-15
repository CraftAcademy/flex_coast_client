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
import store from '../../state/store/configureStore'

const Wizard = () => {
  const { submitMessage, formData, started } = useSelector((state) => state)
  const [loading, setLoading] = useState(false)
  const { t } = useTranslation()

  const start = () => {
    store.dispatch({ type: 'START_WIZARD' })
  }

  return (
    <div
      className='wizard-container'
      id='wizard-container'
      data-cy='wizard'
      tabindex='0'>
      <div className='greeting-container' data-cy='sounds-good-btn'>
        <Question hero text={t('question.greeting')} />
        <CustomButton onClick={start}>{t('answer.interesting')}</CustomButton>
      </div>

      {started && <InquiryCompanySize />}
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
