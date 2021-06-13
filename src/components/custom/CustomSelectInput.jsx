import React, { useEffect } from 'react'
import 'react-responsive-select/dist/react-responsive-select.css'
import locations from '../../assets/Locations'
import i18n from '../../i18n'
import {
  Select,
  CaretIcon,
  MultiSelectOptionMarkup,
  ModalCloseButton,
} from 'react-responsive-select'

const CustomSelectInput = ({ locationValue, setInputValue, disabled }) => {
  const handleChange = (newValue) => {
    if (newValue.options[0].value === 'All') {
      setInputValue(locations.slice(1).map((location) => location.value))
    } else {
      setInputValue(newValue.options.map((location) => location.value))
    }
  }

  useEffect(() => {
    if (i18n.language === 'Svenska') {
      locations[0] = {
        value: 'All',
        text: 'Alla',
        markup: <MultiSelectOptionMarkup text='Alla' />,
      }
    } else {
      locations[0] = {
        value: 'All',
        text: 'Any',
        markup: <MultiSelectOptionMarkup text='Any' />,
      }
    }
    // eslint-disable-next-line
  }, [i18n.language])

  return (
    <>
      {disabled ? (
        <div className='location-filled'>
          <Select
            disabled={true}
            options={locations}
            selectedValues={locationValue}
            className='location-select'
            multiselect={true}
            name='locations'
            modalCloseButton={<ModalCloseButton />}
            caretIcon={<CaretIcon />}
            onChange={(newValue) => handleChange(newValue)}
          />
        </div>
      ) : (
        <Select
          className='location-select'
          options={locations}
          selectedValues={locationValue}
          multiselect={true}
          name='locations'
          modalCloseButton={<ModalCloseButton />}
          caretIcon={<CaretIcon />}
          onChange={(newValue) => handleChange(newValue)}
        />
      )}
    </>
  )
}

export default CustomSelectInput
