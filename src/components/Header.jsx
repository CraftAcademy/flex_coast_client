import React from 'react'
import LanguageSelect from './LanguageSelect'
import logo from '../assets/logo.svg'
import CustomButton from './custom/CustomButton'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ahoy from '../modules/analytics'

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
          <CustomButton dataCy='phone-question' onClick={ahoy.track(`phone_button`)}>
            <a href='tel:+46311234567'>031-123 45 67</a>
          </CustomButton>
          <LanguageSelect />
        </div>
      )}
    </div>
  )
}

export default LandingHeader
