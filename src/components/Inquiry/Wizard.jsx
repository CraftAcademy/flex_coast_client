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
import InquiryStartDate from './InquiryStartDate'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const Wizard = () => {
  const { submitMessage, formData } = useSelector((state) => state)
  const [loading, setLoading] = useState(false)
  const { t } = useTranslation()

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
  }
  const submitVariants = {
    initial: { opacity: 0, x: -25 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.25 } },
  }

  return (
    <>
      {submitMessage ? (
        <motion.div
          className='submit-message-container'
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.5 },
          }}>
          <Question dataCy='on-submit-message' text={submitMessage} />
        </motion.div>
      ) : (
        <motion.div
          style={{ width: '100%' }}
          variants={containerVariants}
          initial='initial'
          animate='animate'
          exit='exit'>
          <div
            className='wizard-container'
            id='wizard-container'
            data-cy='wizard'
            tabIndex='0'>
            <InquiryCompanySize />
            {formData.size && <InquiryOfficeType />}
            {formData.office_type && <InquiryEmail />}
            {formData.email && <InquiryPeers />}
            {formData.peers && <InquiryLocation />}
            {formData.locations[0] && <InquiryWorkingHours />}
            {formData.flexible && <InquiryStartDate />}
            {formData.start_date && <InquiryPhoneNumber />}
            {formData.phone && (
              <motion.div
                className='submit-container'
                variants={submitVariants}>
                <CustomButton
                  loading={loading}
                  submit
                  dataCy='submit-btn'
                  onClick={() => Inquiries.create(formData, setLoading)}>
                  {t('submitButton')}
                </CustomButton>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Wizard
