import React from 'react'

const CustomRadioButton = ({ label_1, label_2, disabled, onChange }) => {
  return (
    <div className='radio-group'>
      <input
        disabled={disabled}
        type='radio'
        id='office'
        data-cy='office-btn'
        value='office'
        name='selector'
        required
        onChange={onChange}
      />
      <label data-cy='office-lable' for='office'>
        {label_1}
      </label>
      <input
        disabled={disabled}
        type='radio'
        id='open-space'
        data-cy='open-space-btn'
        value='open-space'
        name='selector'
        required
        onChange={onChange}
      />
      <label data-cy='open-space-lable' for='open-space'>
        {label_2}
      </label>
    </div>
  )
}

export default CustomRadioButton
