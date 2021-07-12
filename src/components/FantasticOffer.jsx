import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import ahoy from '../modules/analytics'
import iconCity from '../assets/iconCityPurple.svg'
import size from '../assets/sizePurple.svg'
import calendar from '../assets/calendarPurple.svg'

const FantasticOffer = () => {
  const { consent } = useSelector((state) => state)
  const { t } = useTranslation()

  const Offer = ({ image, title, content, id }) => {
    return (
      <div data-cy={`offer-${id}`} className='offer'>
        <img src={image} alt='title' />
        <h3 data-cy='offer-title'>{title}</h3>
        <p data-cy='offer-description'>{content}</p>
      </div>
    )
  }
  return (
    <div className='compelling-container' data-cy='compelling-container'>
      <div className='offer-title'>
        <h1 data-cy='offer-section-header'>{t('fantasticOffer.offerTitle')}</h1>
        <h2 data-cy='offer-section-header-SMS'>
          {t('fantasticOffer.offerSMS')}
        </h2>
      </div>
      <div className='offer-title'>
        <h1 data-cy='offer-section-header'>
          {t('fantasticOffer.rentOutOfficeText')}
        </h1>
      </div>
      <Link
        to='/rent_out'
        className='rent-out'
        onClick={() => consent && ahoy.track(`rent_out_submit_button`)}>
        <button data-cy='rent-out-button' className='rent-out-button'>
          {t('fantasticOffer.rentOutOffice')}
        </button>
      </Link>
      <div className='offer-container'>
        <Offer
          id={1}
          image={size}
          title={t('fantasticOffer.offer1Sub')}
          content={t('fantasticOffer.offer1')}
        />
        <Offer
          id={2}
          image={calendar}
          title={t('fantasticOffer.offer2Sub')}
          content={t('fantasticOffer.offer2')}
        />
        <Offer
          id={3}
          image={iconCity}
          title={t('fantasticOffer.offer3Sub')}
          content={t('fantasticOffer.offer3')}
        />
      </div>
    </div>
  )
}

export default FantasticOffer
