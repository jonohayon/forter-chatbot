import React from 'react'
import { render } from 'react-dom'
import { Grommet } from 'grommet'

import Chat from 'components/Chat.jsx'

const theme = {
  global: {
    font: {
      family: '-apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    }
  }
}

const Application = () => (
  <Grommet theme={theme}>
    <Chat />
  </Grommet>
)

render(<Application />, document.getElementById('root'))
