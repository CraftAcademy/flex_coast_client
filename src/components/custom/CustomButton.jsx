import React, { useEffect } from 'react'

const CustomButton = ({
  children,
  dataCy = 'button',
  submit = false,
  onClick,
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

  return <>{button}</>
}

export default CustomButton
