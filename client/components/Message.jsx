import React from 'react'
import PropTypes from 'prop-types'
import Bubble from 'components/Bubble.jsx'
import { Box, Text } from 'grommet'

const Message = ({ message, author, isOwn, isBot, lastMessage, firstMessage }) => (
  <Box direction='column'>
    {
      firstMessage &&
      <Text size='small' color='dark-5' margin={{ top: '2px', bottom: '1px' }} alignSelf={isOwn ? 'end' : 'start'}>
        {author}
      </Text>
    }
    <Bubble isOwn={isOwn} isBot={isBot} continues={!lastMessage}>
      {message}
    </Bubble>
  </Box>
)

Message.propTypes = {
  message: PropTypes.string,
  author: PropTypes.string,
  isOwn: PropTypes.bool,
  isBot: PropTypes.bool,
  lastMessage: PropTypes.bool,
  firstMessage: PropTypes.bool
}

Message.defaultProps = {
  isOwn: false,
  isBot: false,
  lastMessage: false,
  firstMessage: false
}

export default Message
