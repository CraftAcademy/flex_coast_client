import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'

const CustomIconButton = ({ toggle }) => {
  return (
    <IconButton
      className={toggle ? 'done-btn-filled' : 'done-btn'}
      type='submit'
      data-cy='done-btn'>
      {toggle ? (
        <EditIcon className={toggle ? 'icon-filled' : 'icon'} />
      ) : (
        <ExpandMoreIcon className={toggle ? 'icon-filled' : 'icon'} />
      )}
    </IconButton>
  )
}

export default CustomIconButton
