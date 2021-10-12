const initialState = {
  formData: {
    size: '',
    office_type: '',
    email: '',
    peers: '',
    locations: [],
    start_date: '',
    phone: '',
  },
  filledAnswers: {
    size: false,
    office_type: false,
    email: false,
    peers: false,
    locations: false,
    start_date: false,
    phone: '',
  },
  submitMessage: '',
  language: 'English',
  consent: false,
}

export default initialState
