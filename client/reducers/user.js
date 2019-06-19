export const initialState = {
  user: '',
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

    default:
      return state
  }
}
