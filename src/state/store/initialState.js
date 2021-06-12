const initialState = {
  formData: {
    size: null,
    office_type: '',
    email: '',
    company: '',
    peers: '',
    locations: [],
  },
  filledAnswers: {
    size: false,
    office_type: false,
    email: false,
    company: false,
    peers: false,
    locations: false,
  },
  submitMessage: '',
}

export default initialState
