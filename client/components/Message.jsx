import React from 'react'
import PropTypes from 'prop-types'
import Bubble from 'components/Bubble.jsx'
import styled from 'styled-components'
import { Box, Text } from 'grommet'

const Message = ({ message, author, isOwn, isBot, lastMessage, firstMessage, className }) => (
  <Box
    direction='column'
    justify='center'
    align={isOwn ? 'end' : 'start'}
    margin={{ vertical: '1px' }}
    className={className}
  >
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
  firstMessage: PropTypes.bool,
  className: PropTypes.string
}

Message.defaultProps = {
  isOwn: false,
  isBot: false,
  lastMessage: false,
  firstMessage: false
}

export default Message
