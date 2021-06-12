import React from 'react'
import CustomButton from './custom/CustomButton'
import Header from './Header'
import { useTranslation } from 'react-i18next'

const HeroSection = () => {
  const { t } = useTranslation()
  return (
    <div className='hero-section' data-cy='hero-section'>
      <Header landing />
      <div data-cy='welcome-text' className='welcome-text'>
        <h1>{t('landingPage.introText')}</h1>
        <CustomButton dataCy='get-started-1' link to='/inquiry'>
          {t('landingPage.startButton')}
        </CustomButton>
      </div>
    </div>
  )
}

export default HeroSection
