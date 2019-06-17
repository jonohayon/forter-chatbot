import React from 'react'
import NavBar from 'components/NavBar.jsx'
import Message from 'components/Message.jsx'
import { Box } from 'grommet'

const Chat = () => (
  <Box fill>
    <NavBar title='The Question Box' />

    <Box
      direction='row'
      flex
      justify='center'
      background='light-3'
      overflow={{ horizontal: 'hidden' }}
    >
      <Box
        width='large'
        pad='small'
      >
        <Message
          author='Jonathan Ohayon'
          message='Test'
          firstMessage
        />
        <Message
          author='Jonathan Ohayon'
          message='Test'
          lastMessage
        />

        <Message
          author='Jonathan Ohayon'
          message='Test'
          isOwn firstMessage
        />
        <Message
          author='Jonathan Ohayon'
          message='Test'
          isOwn lastMessage
        />
      </Box>
    </Box>
  </Box>
)

export default Chat
