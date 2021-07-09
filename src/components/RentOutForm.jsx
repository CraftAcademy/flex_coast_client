import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import ahoy from '../modules/analytics'
import Header from './Header'
import Inquiries from '../modules/Inquiries'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const RentOutForm = () => {
  const { consent } = useSelector((state) => state)
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  })

  const questions = [
    {
      text: t('rentOutQuestions.name'),
      type: 'text',
      required: true,
      multiline: false,
      dataKey: 'name',
    },
    {
      text: t('rentOutQuestions.phone'),
      type: 'number',
      required: true,
      multiline: false,
      dataKey: 'phone',
    },
    {
      text: t('rentOutQuestions.location'),
      type: 'email',
      required: true,
      multiline: false,
      dataKey: 'email',
    },
    {
      text: t('rentOutQuestions.extraText'),
      type: 'text',
      required: false,
      multiline: true,
      rows: 4,
      dataKey: 'notes',
    },
  ]

  const sendToHubSpot = (event) => {
    event.preventDefault()
    Inquiries.sendToHubSpot(formData, setLoading)
  }

  const saveToState = (event, dataKey) => {
    let data = formData
    data[dataKey] = event.target.value
    setFormData(data)
  }

  const form = questions.map((question) => (
    <TextField
      className='form-input'
      onChange={(event) => saveToState(event, question.dataKey)}
      label={question.text}
      data-cy={question.dataKey}
      type={question.type}
      required={question.required}
      multiline={question.multiline}
      rows={question.rows}
      variant='outlined'
      style={{ margin: '10px' }}
    />
  ))

  return (
    <div className='rent-out-page'>
      <Header />
      <div className='form-container'>
        <IconButton className='close-form-button'>
          <Link to='/'>
            <CloseIcon style={{ color: '#333', fontSize: '24px' }} />
          </Link>
        </IconButton>
        <form
          data-cy='rent-out-form'
          onSubmit={(event) => sendToHubSpot(event)}>
          {form}
          <button
            className='custom-button'
            loading={loading}
            data-cy='submit-button'
            submit
            dataCy='submit-btn'
            onClick={consent && ahoy.track(`rent_out_button`)}>
            {t('submitButton')}
          </button>
        </form>
      </div>
    </div>
  )
}

export default RentOutForm
