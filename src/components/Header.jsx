import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import LanguageSelect from './LanguageSelect'
import logo from '../assets/logo.svg'
import CustomButton from './custom/CustomButton'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'

const LandingHeader = ({ landing }) => {
  const [open, setOpen] = useState(false)
  const isSmall = useMediaQuery('(max-width:620px)')
  let history = useHistory()

  return (
    <div
      data-cy='header'
      className={landing ? 'page-header-landing' : 'page-header'}>
      <img
        src={logo}
        alt='logo'
        className='logo'
        data-cy='flex-coast'
        onClick={() => history.push('/')}
      />
      {isSmall ? (
        <div className='dropdown-menu'>
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon fontSize='large' />
          </IconButton>
          <Drawer
            className='dropdown-container'
            anchor='top'
            open={open}
            onClose={() => setOpen(false)}>
            <>
              <CustomButton dataCy='phone-number'>
                <a href='tel:+46812345678'>08-123 456 78</a>
              </CustomButton>
              <LanguageSelect />
            </>
          </Drawer>
        </div>
      ) : (
        <div className='menu-wrapper'>
          <CustomButton dataCy='phone-number'>
            <a href='tel:+46812345678'>08-123 456 78</a>
          </CustomButton>
          <LanguageSelect />
        </div>
      )}
    </div>
  )
}

export default LandingHeader
