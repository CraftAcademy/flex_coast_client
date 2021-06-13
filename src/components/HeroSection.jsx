import React from 'react'
import Header from './Header'
import { useTranslation } from 'react-i18next'
import Wizard from './Inquiry/Wizard'

const HeroSection = () => {
  const { t } = useTranslation()
  return (
    <div className='hero-section' data-cy='hero-section'>
      <Header landing />
      <div data-cy='welcome-text' className='welcome-text'>
        <h1>{t('landingPage.introText')}</h1>
        <Wizard />
      </div>
        
    </div>
  )
}

export default HeroSection
