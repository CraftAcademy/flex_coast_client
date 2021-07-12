import React, { useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

const CustomButton = ({
  children,
  dataCy = 'button',
  submit = false,
  onClick,
  loading = false,
  color,
}) => {
  const scroll = () => {
    let container = document.getElementById('wizard-container')
    if (container) {
      container.scrollBy({ top: container.offsetHeight, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (submit) {
      scroll()
    }
    // eslint-disable-next-line
  }, [])

  const button = (
    // TODO: De faq is this? onClick={onClick}
    <button
      className='custom-button'
      data-cy={dataCy}
      onClick={onClick}
      >
      {loading ? <CircularProgress size={25} /> : children}
    </button>
  )

  return <>{button}</>
}

export default CustomButton
