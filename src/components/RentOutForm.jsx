import React, { useState } from 'react'
import Header from './Header'
import TextField from '@material-ui/core/TextField'
import Inquiries from '../modules/Inquiries'
import { useTranslation } from 'react-i18next'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { Link } from 'react-scroll'

const RentOutForm = () => {
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
      text: 'Please tell us your name',
      type: 'text',
      required: true,
      multiline: false,
      dataKey: 'name',
    },
    {
      text: 'Can you leave your phone number?',
      type: 'number',
      required: true,
      multiline: false,
      dataKey: 'phone',
    },
    {
      text: 'Where can we reach you?',
      type: 'email',
      required: true,
      multiline: false,
      dataKey: 'email',
    },
    {
      text: 'Do you have anything else to say?',
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
    <>
      <Header />
      <div className='form-container'>
        <IconButton className='close-form-button'>
          <CloseIcon style={{ color: '#bbb', fontSize: '24px' }}>
            <Link to='/'></Link>
          </CloseIcon>
        </IconButton>
        <form data-cy='rent-out-form' onSubmit={(event) => sendToHubSpot(event)}>
          {form}
          <button
            className='custom-button'
            loading={loading}
            data-cy='submit-button'
            submit
            dataCy='submit-btn'>
            {t('submitButton')}
          </button>
        </form>
      </div>
    </>
  )
}

export default RentOutForm
