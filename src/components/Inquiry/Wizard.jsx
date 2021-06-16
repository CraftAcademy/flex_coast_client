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
import { motion } from 'framer-motion'

const Wizard = () => {
  const { submitMessage, formData } = useSelector((state) => state)
  const [loading, setLoading] = useState(false)
  const { t } = useTranslation()

  const containerVariants = {
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0, transition: { delay: 2.7, duration: 0.8 } },
  }
  const submitVariants = {
    initial: { opacity: 0, x: -25 },
    animate: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.25 } },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial='initial'
      animate='animate'
      className='wizard-container'
      id='wizard-container'
      data-cy='wizard'
      tabindex='0'>
      <InquiryCompanySize />
      {formData.size && <InquiryOfficeType />}
      {formData.office_type && <InquiryEmail />}
      {formData.email && <InquiryPeers />}
      {formData.peers && <InquiryLocation />}
      {formData.locations[0] && <InquiryWorkingHours />}
      {formData.flexible && <InquiryPhoneNumber />}

      {submitMessage ? (
        <Question dataCy='on-submit-message' text={submitMessage} />
      ) : (
        formData.phone && (
          <motion.div className='submit-container' variants={submitVariants}>
            <CustomButton
              loading={loading}
              submit
              dataCy='submit-btn'
              onClick={() => Inquiries.create(formData, setLoading)}>
              {t('submitButton')}
            </CustomButton>
          </motion.div>
        )
      )}
    </motion.div>
  )
}

export default Wizard
