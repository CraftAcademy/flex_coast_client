import React from 'react'
import { Link } from 'react-router-dom'

const CustomButton = ({
  children,
  dataCy = 'button',
  onClick,
  link = false,
  to,
}) => {
  const button = (
    <button className='custom-button' data-cy={dataCy} onClick={onClick}>
      {children}
    </button>
  )

  return <>{link ? <Link to={to}>{button}</Link> : button}</>
}

export default CustomButton
