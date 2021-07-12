import React from 'react'
import { Link } from 'react-router-dom'
import LanguageSelect from './LanguageSelect'
import { useSelector } from 'react-redux'
import logo from '../assets/logo.svg'
import CustomButton from './custom/CustomButton'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ahoy from '../modules/analytics'
import { motion } from 'framer-motion'

const LandingHeader = ({ landing }) => {
  const { consent } = useSelector((state) => state)
  const isSmall = useMediaQuery('(max-width:620px)')

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      data-cy='header'
      className={landing ? 'page-header-landing' : 'page-header'}>
      <Link to='/'>
        <img src={logo} alt='logo' className='logo' data-cy='flex-coast' />
      </Link>
      {isSmall ? (
        <LanguageSelect />
      ) : (
        <div className='menu-wrapper'>
          <CustomButton
            dataCy='phone-question'
            onClick={() => consent && ahoy.track(`phone_button`)}>
            <a href='tel:+4631296500'>031-296500</a>
          </CustomButton>
          <LanguageSelect />
        </div>
      )}
    </motion.div>
  )
}

export default LandingHeader
