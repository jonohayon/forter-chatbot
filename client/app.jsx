import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Grommet } from 'grommet'

import Chat from 'containers/Chat.jsx'
import store from './store'

const theme = {
  global: {
    font: {
      family: '-apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    }
  }
}

const Application = () => (
  <Provider store={store}>
    <Grommet theme={theme} full>
      <Chat />
    </Grommet>
  </Provider>
)

render(<Application />, document.getElementById('root'))
