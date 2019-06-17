import axios from 'axios'

export const requestMessages = { type: 'REQUEST_MESSAGES' }

export const receiveMessages = messages => ({
  type: 'RECEIVE_MESSAGES',
  messages
})

export const getMessages = () => async dispatch => {
  dispatch(requestMessages)
  const messages = await axios.get('/messages/-1')
  dispatch(receiveMessages(messages))
}
