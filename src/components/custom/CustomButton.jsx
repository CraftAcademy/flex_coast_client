import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const CustomButton = ({
  children,
  dataCy = 'button',
  submit = false,
  onClick,
  link = false,
  to,
}) => {
  const scroll = () => {
    let container = document.getElementById('wizard-container')
    container.scrollBy({ top: container.offsetHeight, behavior: 'smooth' })
  }

  useEffect(() => {
    if (submit) {
      scroll()
    }
    // eslint-disable-next-line
  }, [])

  const button = (
    <button className='custom-button' data-cy={dataCy} onClick={onClick}>
      {children}
    </button>
  )

  return <>{link ? <Link to={to}>{button}</Link> : button}</>
}

export default CustomButton
