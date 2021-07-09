import React, { useState } from 'react'
import Header from './Header'
import TextField from '@material-ui/core/TextField'
import Inquiries from '../modules/Inquiries'
import { useTranslation } from 'react-i18next'

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
    },
    {
      text: 'Can you leave your phone number?',
      type: 'number',
      required: true,
      multiline: false,
    },
    {
      text: 'Where can we reach you?',
      type: 'email',
      required: true,
      multiline: false,
    },
    {
      text: 'Do you have anything else to say?',
      type: 'text',
      required: false,
      multiline: true,
    },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    debugger
    //Inquiries.exportHubSpot(formData, setLoading)
  }

  const form = questions.map((question) => (
    <TextField
      className='form-input'
      onChange={(event) => }
      label={question.text}
      type={question.type}
      required={question.required}
      multiline={question.multiline}
      variant='outlined'
    />
  ))

  return (
    <>
      <Header />
      <div className='form-container'>
        <form onSubmit={(event) => handleSubmit(event)}>
          {form}
          <button className='custom-button' loading={loading} submit dataCy='submit-btn'>
            {t('submitButton')}
          </button>
        </form>
      </div>
    </>
  )
}

export default RentOutForm
