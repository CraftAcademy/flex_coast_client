import React from 'react'
import Header from './Header'
import { useTranslation } from 'react-i18next'
import Wizard from './Inquiry/Wizard'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const { t } = useTranslation()
  return (
    <div className='hero-section' data-cy='hero-section'>
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
    </div>
  )
}

export default HeroSection
