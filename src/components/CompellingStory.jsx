import React from 'react'
import avatar from '../assets/avatar.jpg'
import { useTranslation } from 'react-i18next'

const CompellingStory = () => {
  const { t } = useTranslation()
  return (
    <div className='compelling-container' data-cy='compelling-container'>
      <img
        className='compelling-avatar'
        src={avatar}
        alt='avatar'
        data-cy='compelling-avatar'
      />
      <p className='compelling-text' data-cy='compelling-text'>
      {t('compellingText')}
      </p>
    </div>
  )
}

export default CompellingStory
