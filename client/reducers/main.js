import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import messages from 'reducers/messages.js'

const reducers = combineReducers({
  messages
})

export default createStore(
  reducers,
  applyMiddleware(thunk)
)
