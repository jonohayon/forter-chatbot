export const initialState = {
  text: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ONCHANGE':
      return {
        ...state,
        text: action.event.target.value
      }

    default:
      return state
  }
}
