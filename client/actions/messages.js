import axios from 'axios'
import { BOT_USER } from '../bot'
import { setBotMode } from './user'

export const requestMessages = { type: 'REQUEST_MESSAGES' }

export const receiveMessages = messages => ({
  type: 'RECEIVE_MESSAGES',
  messages
})

export const newMessage = message => ({
  type: 'NEW_MESSAGE',
  message
})

export const getMessages = () => async dispatch => {
  dispatch(requestMessages)
  const { data } = await axios.get('/messages/-1')
  dispatch(receiveMessages(data.messages))
}

export const subscribeToMessages = () => dispatch => {
  const source = new EventSource('/messages')

  source.addEventListener('message', event => {
    const data = JSON.parse(event.data)
    if (data.body === 'soup.webp' && data.userId === BOT_USER) dispatch(setBotMode(false))
    dispatch(newMessage(data))
  })
}
