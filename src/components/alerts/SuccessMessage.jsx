import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import { useSelector } from 'react-redux'
import store from '../../state/store/configureStore'

const SuccessMessage = () => {
  const { successMessage, successMessageOpen } = useSelector((state) => state)

  const handleClose = () => {
    store.dispatch({
      type: 'CLOSE_SUCCESS_MESSAGE',
    })
  }

  return (
    <Snackbar
      className='success-snackbar'
      data-cy='success-message'
      open={successMessageOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      message={<p data-cy='success-message'>{successMessage}</p>}
      severity='success'
    />
  )
}

export default SuccessMessage
