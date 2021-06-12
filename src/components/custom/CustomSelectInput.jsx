import React from 'react'
// import FormControl from '@material-ui/core/FormControl'
// import InputLabel from '@material-ui/core/InputLabel'
// import Select from '@material-ui/core/Select'
// import Checkbox from '@material-ui/core/Checkbox'
// import ListItemText from '@material-ui/core/ListItemText'
// import Input from '@material-ui/core/Input'
// import MenuItem from '@material-ui/core/MenuItem'

import {
  Select,
  CaretIcon,
  MultiSelectOptionMarkup,
  ModalCloseButton,
} from 'react-responsive-select'
import 'react-responsive-select/dist/react-responsive-select.css'

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

const CustomSelectInput = ({ locationValue, setInputValue, disabled }) => {
  const handleChange = (newValue) => {
    if (newValue.options[0].value) {
      setInputValue(newValue.options.map((location) => location.value))
    } else {
      setInputValue(locations.slice(1).map((location) => location.value))
    }
  }
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

    // <FormControl variant='outlined' className={locationValue[0] && 'filled'}>
    //   {/* <InputLabel>Locations</InputLabel> */}
    //   <Select
    //     data-cy='location-select'
    //     multiple
    //     value={locationValue}
    //     onChange={(event) => {
    //       setInputValue(event.target.value)
    //     }}
    //     input={<Input />}
    //     renderValue={(selected) => selected.join(', ')}
    //     //MenuProps={MenuProps}
    //   >
    //     {locations.map((location) => (
    //       <MenuItem key={location} value={location}>
    //         <Checkbox checked={locationValue.indexOf(location) > -1} />
    //         <ListItemText primary={location} />
    //       </MenuItem>
    //     ))}
    //   </Select>
    // </FormControl>
  )
}

export default CustomSelectInput
