export const initialState = {
  user: '',
  botMode: false,
  isInitialized: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
        isInitialized: true
      }

    case 'SET_BOT_MODE':
      return {
        ...state,
        botMode: action.botMode
      }

    default:
      return state
  }
}
