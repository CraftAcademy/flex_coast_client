import React from 'react'
import Header from './Header'
import { useTranslation } from 'react-i18next'
import Wizard from './Inquiry/Wizard'
import CustomButton from './custom/CustomButton'

const HeroSection = () => {
  const { t } = useTranslation()
  return (
    <div className='hero-section' data-cy='hero-section'>
      <Header landing />
      <div data-cy='welcome-text' className='welcome-text'>
        <h1 data-cy='welcome-message'>{t('landingPage.introText')}</h1>
        <Wizard />
      </div>
      <div className='phone-number-button'>
        <p>{t('landingPage.phoneCallUsText')}</p>
        <CustomButton dataCy='phone-number'>
          <a href='tel:+46812345678'>08-123 456 78</a>
        </CustomButton>
      </div>
    </div>
  )
}

export default HeroSection
