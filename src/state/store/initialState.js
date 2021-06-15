const initialState = {
  formData: {
    size: undefined,
    office_type: '',
    email: '',
    peers: '',
    locations: [],
    flexible: '',
    phone: '',
  },
  filledAnswers: {
    size: false,
    office_type: false,
    email: false,
    peers: false,
    locations: false,
    flexible: false,
    phone: '',
  },
  submitMessage: '',
  language: 'English',
}

export default initialState
