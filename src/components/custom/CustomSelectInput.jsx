import React, { useEffect } from 'react'
import 'react-responsive-select/dist/react-responsive-select.css'
import i18n from '../../i18n'
import {
  Select,
  CaretIcon,
  MultiSelectOptionMarkup,
  ModalCloseButton,
} from 'react-responsive-select'

const CustomSelectInput = ({ locationValue, setInputValue, disabled }) => {
  const handleChange = (newValue) => {
    if (newValue.options[0].value) {
      setInputValue(newValue.options.map((location) => location.value))
    } else {
      setInputValue(locations.slice(1).map((location) => location.value))
    }
  }

  useEffect(() => {
    if (i18n.language === 'Svenska') {
      locations[0] = {
        value: 'null',
        text: 'Alla',
        markup: <MultiSelectOptionMarkup text='Alla' />,
      }
    } else {
      locations[0] = {
        value: 'null',
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

const locations = [
  {
    value: 'null',
    text: 'Any',
    markup: <MultiSelectOptionMarkup text='Any' />,
  },
  {
    value: 'Lindholmen',
    text: 'Lindholmen',
    markup: <MultiSelectOptionMarkup text='Lindholmen' />,
  },
  {
    value: 'Gamlestaden',
    text: 'Gamlestaden',
    markup: <MultiSelectOptionMarkup text='Gamlestaden' />,
  },
  {
    value: 'Järntorget',
    text: 'Järntorget',
    markup: <MultiSelectOptionMarkup text='Järntorget' />,
  },
  {
    value: 'Linnè',
    text: 'Linnè',
    markup: <MultiSelectOptionMarkup text='Linnè' />,
  },
  {
    value: 'Nordstan',
    text: 'Nordstan',
    markup: <MultiSelectOptionMarkup text='Nordstan' />,
  },
  {
    value: 'Korsvägen',
    text: 'Korsvägen',
    markup: <MultiSelectOptionMarkup text='Korsvägen' />,
  },
  {
    value: 'Majorna',
    text: 'Majorna',
    markup: <MultiSelectOptionMarkup text='Majorna' />,
  },
  {
    value: 'Avenyn',
    text: 'Avenyn',
    markup: <MultiSelectOptionMarkup text='Avenyn' />,
  },
  {
    value: 'Haga',
    text: 'Haga',
    markup: <MultiSelectOptionMarkup text='Haga' />,
  },
  {
    value: 'Stenpiren',
    text: 'Stenpiren',
    markup: <MultiSelectOptionMarkup text='Stenpiren' />,
  },
  {
    value: 'Eriksberg',
    text: 'Eriksberg',
    markup: <MultiSelectOptionMarkup text='Eriksberg' />,
  },
]
