import React from 'react'
import Grid from '@material-ui/core/Grid'
import logo from '../assets/logoWhite.svg'
import CustomButton from './custom/CustomButton'
import { useTranslation } from 'react-i18next'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import IconButton from '@material-ui/core/IconButton'
import ahoy from '../modules/analytics'

const Footer = () => {
  const { t } = useTranslation()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Grid data-cy='footer' id='footer' container alignItems='center'>
      <Grid className='footer-header' item xs={12}>
        <img
          src={logo}
          alt='logo'
          className='logo'
          data-cy='flex-coast-white'
        />
        <hr className='sub-hr' />
      </Grid>
      <Grid data-cy='footer-categories' container alignItems='flex-start'>
        <Grid data-cy='footer-about' className='sub-header' item sm={4}>
          <h3 data-cy='footer-about-header'>{t('footer.subHeader1')}</h3>
          <p data-cy='footer-about-us' className='footer-text'>
            {t('footer.aboutUsText')}
          </p>
          <hr className='sub-hr' />
        </Grid>
        <Grid
          data-cy='footer-contact'
          className='sub-header'
          item
          xs={12}
          sm={4}>
          <h3 data-cy='footer-contact-header'>{t('footer.subHeader2')}</h3>
          <CustomButton
            dataCy='phone-number'
            onClick={ahoy.track(`phone_button`)}>
            <a href='tel:+46311234567'>031-123 45 67</a>
          </CustomButton>
          <CustomButton dataCy='get-started' onClick={scrollToTop}>
            {t('footer.startButton')}
          </CustomButton>
          <hr className='sub-hr' />
        </Grid>
        <Grid data-cy='links' className='sub-header' item xs={12} sm={4}>
          <h3 data-cy='footer-find-us-header'>{t('footer.subHeader3')}</h3>
          <Grid data-cy='link-grid'>
            <IconButton data-cy='linkedin-button' href={'https://www.linkedin.com/'} >
              <LinkedInIcon className='icon' fontSize='large' />
            </IconButton>
            <IconButton data-cy='facebook-button' href={'https://www.facebook.com/'} >
              <FacebookIcon className='icon' fontSize='large' />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer
