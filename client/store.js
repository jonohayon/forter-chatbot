import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import messages from 'reducers/messages.js'
import input from 'reducers/input.js'

const reducers = combineReducers({
  messages,
  input
})

export default createStore(
  reducers,
  applyMiddleware(thunk)
)
