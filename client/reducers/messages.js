export const initialState = {
  messages: [],
  isInitializing: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_MESSAGES':
      return {
        ...state,
        isInitializing: true
      }

    case 'RECEIVE_MESSAGES':
      return {
        ...state,
        messages: action.messages,
        isInitializing: false
      }

    case 'NEW_MESSAGE':
      return {
        ...state,
        messages: [
          ...state.messages,
          action.message
        ]
      }

    default:
      return state
  }
}
