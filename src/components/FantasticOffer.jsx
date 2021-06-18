import React from 'react'
import iconCity from '../assets/iconCityPurple.svg'
import size from '../assets/sizePurple.svg'
import calendar from '../assets/calendarPurple.svg'
import { useTranslation } from 'react-i18next'

const FantasticOffer = () => {
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
