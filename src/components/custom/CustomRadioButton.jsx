import React from 'react'

const CustomRadioButton = ({
  label_1,
  label_2,
  dataCy_1,
  dataCy_2,
  disabled,
  onChange,
  radio_value,
  value_1,
  value_2,
}) => {
  return (
    <div className='radio-group'>
      <input
        disabled={disabled}
        type='radio'
        id={dataCy_1}
        data-cy={`${dataCy_1}-btn`}
        value={value_1}
        name='selector'
        checked={radio_value === value_1}
        required
        onChange={onChange}
      />
      <label data-cy={`${dataCy_1}-lable`} for={dataCy_1}>
        {label_1}
      </label>
      <input
        disabled={disabled}
        type='radio'
        id={dataCy_2}
        data-cy={`${dataCy_2}-btn`}
        value={value_2}
        name='selector'
        checked={radio_value === value_2}
        required
        onChange={onChange}
      />
      <label data-cy={`${dataCy_2}-lable`} for={dataCy_2}>
        {label_2}
      </label>
    </div>
  )
}

export default CustomRadioButton
