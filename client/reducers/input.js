export const initialState = {
  text: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ONCHANGE':
      return {
        ...state,
        text: action.target.value
      }

    default:
      return state
  }
}
