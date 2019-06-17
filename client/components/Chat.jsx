import React from 'react'
import { Box, Heading } from 'grommet'

const Chat = () => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: 1 }}
  >
    <Heading level='3' margin='none'>
      The Question Box
    </Heading>
  </Box>
)

export default Chat
