import React from 'react'
import iconCity from '../assets/iconCityPurple.svg'
import size from '../assets/sizePurple.svg'
import calendar from '../assets/calendarPurple.svg'
import { useTranslation } from 'react-i18next'

const FantasticOffer = () => {
  const { t } = useTranslation()

  const Offer = ({ image, title, content }) => {
    return (
      <div className='offer'>
        <img src={image} alt='title' />
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    )
  }
  return (
    <div className='compelling-container' data-cy='compelling-container'>
      <div className='offer-title'>
        <h1>{t('fantasticOffer.offerTitle')}</h1>
      </div>
      <div className='offer-container'>
        <Offer
          image={size}
          title={t('fantasticOffer.offer1Sub')}
          content={t('fantasticOffer.offer1')}
        />
        <Offer
          image={calendar}
          title={t('fantasticOffer.offer2Sub')}
          content={t('fantasticOffer.offer2')}
        />
        <Offer
          image={iconCity}
          title={t('fantasticOffer.offer3Sub')}
          content={t('fantasticOffer.offer3')}
        />
      </div>
    </div>
  )
}

export default FantasticOffer
