const initialState = {
  formData: {
    size: undefined,
    office_type: '',
    email: '',
    company: '',
    peers: '',
    locations: [],
    flexible: '',
  },
  filledAnswers: {
    size: false,
    office_type: false,
    email: false,
    company: false,
    peers: false,
    locations: false,
    flexible: false,
  },
  submitMessage: '',
  language: 'English',
}

export default initialState
