import axios from 'axios'
import { constructAnswer, BOT_USER } from '../bot'

export const onChange = event => ({
  type: 'CHANGE',
  event
})

export const onSubmit = { type: 'SUBMIT' }

const postMessage = (message, user) => axios.post('/message', { user, message })
const postBot = message => postMessage(
  constructAnswer(message),
  BOT_USER
)

export const postQuestion = (text, user, botMode) => dispatch => postMessage(text, user)
  .then(() => botMode ? postBot(text) : Promise.resolve())
  .then(() => dispatch(onSubmit))
