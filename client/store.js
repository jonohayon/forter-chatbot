import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import messages from 'reducers/messages.js'
import input from 'reducers/input.js'
import user from 'reducers/user.js'

const reducers = combineReducers({
  messages,
  input,
  user
})

export default createStore(
  reducers,
  applyMiddleware(thunk)
)
