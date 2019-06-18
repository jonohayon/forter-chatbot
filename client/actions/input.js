import axios from 'axios'

export const onChange = event => ({
  type: 'CHANGE',
  event
})

export const onSubmit = { type: 'SUBMIT' }

export const postQuestion = text => dispatch => axios.post('/message', {
  user: 'jonathan',
  message: text
}).then(() => dispatch(onSubmit))
