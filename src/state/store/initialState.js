const initialState = {
  formData: {
    size: null,
    office_type: '',
    email: '',
    company: '',
    peers: '',
  },
  filledAnswers: {
    size: false,
    office_type: false,
    email: false,
    company: false,
    peers: false,
  },
  submitMessage: '',
}

export default initialState
