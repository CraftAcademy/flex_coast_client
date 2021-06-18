import React from 'react'

const CustomRadioButton = ({ data, disabled, onChange, inputValue }) => {
  return (
    <div className='radio-group'>
      {data.map((item) => {
        return (
          <div key={item.label} style={{ display: 'inline' }}>
            <input
              disabled={disabled}
              type='radio'
              id={item.dataCy}
              data-cy={`${item.dataCy}-btn`}
              value={item.value}
              name='selector'
              checked={inputValue === item.value}
              required
              onChange={onChange}
              onClick={() =>
                document.getElementById('wizard-container').focus()
              }
            />
            <label
              data-cy={`${item.dataCy}-label`}
              for={item.dataCy}
              className={!disabled && 'radio'}>
              {item.label}
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default CustomRadioButton
