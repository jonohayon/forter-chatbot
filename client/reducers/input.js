export const initialState = {
  text: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        text: action.event.target.value
      }

    case 'SUBMIT':
      return {
        ...state,
        text: ''
      }

    default:
      return state
  }
}
