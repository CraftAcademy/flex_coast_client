import React, { useState } from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import i18n from '../i18n'
import { useEffect } from 'react'

const LanguageSelect = ({ setOpen }) => {
  const [language, setLanguage] = useState(i18n.language)
  const handleChange = (event) => {
    setLanguage(event.target.value)
    i18n.changeLanguage(event.target.value)
    setOpen && setOpen(false)
  }

  useEffect(() => {
    if (navigator.language.includes('sv')) {
      setLanguage('Svenska')
    } else {
      setLanguage('English')
    }
  }, [])

  return (
    <Select
      data-cy='language-dropdown'
      inputProps={{
        name: 'language',
        id: 'age-native-simple',
      }}
      value={language}
      onChange={handleChange}
      disableUnderline={true}>
      <MenuItem data-cy='english' value={'English'}>
        English
      </MenuItem>
      <MenuItem data-cy='svenska' value={'Svenska'}>
        Svenska
      </MenuItem>
    </Select>
  )
}

export default LanguageSelect
