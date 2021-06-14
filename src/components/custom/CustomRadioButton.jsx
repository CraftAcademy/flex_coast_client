import React from 'react'

const CustomRadioButton = ({
  labels,
  dataCys,
  values,
  disabled,
  onChange,
  radio_value,
}) => {
  return (
    <div className='radio-group'>
      <input
        disabled={disabled}
        type='radio'
        id={dataCys.dataCy_1}
        data-cy={`${dataCys.dataCy_1}-btn`}
        value={values.value_1}
        name='selector'
        checked={radio_value === values.value_1}
        required
        onChange={onChange}
      />
      <label data-cy={`${dataCys.dataCy_1}-lable`} for={dataCys.dataCy_1}>
        {labels.label_1}
      </label>
      <input
        disabled={disabled}
        type='radio'
        id={dataCys.dataCy_2}
        data-cy={`${dataCys.dataCy_2}-btn`}
        value={values.value_2}
        name='selector'
        checked={radio_value === values.value_2}
        required
        onChange={onChange}
      />
      <label data-cy={`${dataCys.dataCy_2}-lable`} for={dataCys.dataCy_2}>
        {labels.label_2}
      </label>
    </div>
  )
}

export default CustomRadioButton
