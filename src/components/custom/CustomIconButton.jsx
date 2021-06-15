import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'

const CustomIconButton = ({ toggle }) => {
  return (
    <IconButton
      className={toggle ? 'done-btn-filled' : 'done-btn'}
      type='submit'
      onClick={() => document.getElementById('wizard-container').focus()}
      data-cy='done-btn'>
      {toggle ? (
        <EditIcon className={toggle ? 'icon-filled' : 'icon'} />
      ) : (
        <ArrowForwardIcon className={toggle ? 'icon-filled' : 'icon'} />
      )}
    </IconButton>
  )
}

export default CustomIconButton
