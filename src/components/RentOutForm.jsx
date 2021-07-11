import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { TextField, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import Header from './Header'
import Inquiries from '../modules/Inquiries'

const RentOutForm = () => {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [formData, setFormData] = useState({
    officeProvider: true,
    name: '',
    phone: '',
    email: '',
    notes: '',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
      text: t('rentOutQuestions.email'),
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

  const handleSubmit = (event) => {
    event.preventDefault()
    Inquiries.create(formData, setLoading)
    setRedirect(true)
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
      {redirect && <Redirect to='/'/>}
      <Header />
      <div className='form-container'>
        <IconButton className='close-form-button'>
          <Link to='/'>
            <CloseIcon style={{ color: '#333', fontSize: '24px' }} />
          </Link>
        </IconButton>
        <form
          data-cy='rent-out-form'
          onSubmit={(event) => handleSubmit(event)}>
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
    </div>
  )
}

export default RentOutForm
