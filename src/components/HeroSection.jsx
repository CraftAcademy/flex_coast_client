import React, { lazy } from 'react'
import Header from './Header'
import { useTranslation } from 'react-i18next'
import Wizard from './Inquiry/Wizard'
import CustomButton from './custom/CustomButton'
import { motion } from 'framer-motion'
const heroImg = lazy(() => import('../assets/HeroImageMedium.jpg'))

const HeroSection = () => {
  const { t } = useTranslation()
  return (
    <div
      className='hero-section'
      data-cy='hero-section'
      style={{
        background: `background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), ${heroImg}`,
      }}>
      <Header landing />
      <div data-cy='welcome-text' className='welcome-text'>
        <motion.h1
          data-cy='welcome-message'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}>
          {t('landingPage.introText')}
        </motion.h1>
        <Wizard />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className='phone-number-button'>
        <p>{t('landingPage.phoneCallUsText')}</p>
        <CustomButton dataCy='phone-number'>
          <a href='tel:+46311234567'>031-123 45 67</a>
        </CustomButton>
      </motion.div>
    </div>
  )
}

export default HeroSection
