import React from 'react'
import LanguageSelect from './LanguageSelect'
import logo from '../assets/logo.svg'
import CustomButton from './custom/CustomButton'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const LandingHeader = ({ landing }) => {
  const isSmall = useMediaQuery('(max-width:620px)')

  return (
    <div
      data-cy='header'
      className={landing ? 'page-header-landing' : 'page-header'}>
      <img src={logo} alt='logo' className='logo' data-cy='flex-coast' />
      {isSmall ? (
        <LanguageSelect />
      ) : (
        <div className='menu-wrapper'>
          <CustomButton dataCy='phone-question'>
            <a href='tel:+46812345678'>08-123 456 78</a>
          </CustomButton>
          <LanguageSelect />
        </div>
      )}
    </div>
  )
}

export default LandingHeader
