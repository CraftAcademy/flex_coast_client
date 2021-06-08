import React from 'react'
import CustomButton from '../custom/CustomButton'
import LandingHeader from './LandingHeader'

const HeroSection = () => {
  return (
    <div className='hero-section' data-cy='hero-section'>
      <LandingHeader />
      <div data-cy='welcome-text' className='welcome-text'>
        <h1>Flexible short term office leasing in lovely Gothenburg</h1>
        <CustomButton dataCy='get-started' link to='/inquiry'>
          Get Started
        </CustomButton>
      </div>
    </div>
  )
}

export default HeroSection
