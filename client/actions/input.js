import axios from 'axios'

export const onChange = event => ({
  type: 'CHANGE',
  event
})

export const onSubmit = { type: 'SUBMIT' }

export const postQuestion = (text, user) => dispatch => axios.post('/message', {
  user,
  message: text
}).then(() => dispatch(onSubmit))
