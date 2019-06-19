import React from 'react'
import PropTypes from 'prop-types'
import Message from 'components/Message.jsx'
import styled from 'styled-components'
import { Box, InfiniteScroll } from 'grommet'

/**
 * Constructs the props for the individual Message nodes.
 * It's not written in the most functional way, and probably could be written using reduce, but it's working pretty good.
 */
const createMessageData = (messages, ownUser) => {
  const toRender = []; let currentUser = ''
  for (let i = 0; i < messages.length; i++) {
    const { userId: user, body: message } = messages[i]
    const userChange = !!currentUser && user !== currentUser

    if (!currentUser) currentUser = user
    if (userChange) {
      toRender[i - 1].lastMessage = true
      currentUser = user
    }

    toRender.push({
      author: user,
      message,
      firstMessage: userChange,
      lastMessage: false,
      isOwn: user === ownUser,
      isBot: false, // TODO - Implement isBot
      key: i
    })
  }

  toRender[0].firstMessage = true
  toRender[toRender.length - 1].lastMessage = true
  return toRender
}

const Container = styled(Box)`
  display: block;
  ${props => props.user && 'flex: 1;'}
  &::-webkit-scrollbar { width: 0 !important }
`

const MessageList = ({ messages, user }) => (
  <Container
    pad={{ top: 'small', horizontal: 'small' }}
    width='large'
    overflow={{ horizontal: 'hidden', vertical: 'auto' }}
    user={user}
  >
    {
      messages.length > 0 &&
      <InfiniteScroll
        items={createMessageData(messages, user)}
        show={messages.length - 1}
      >
        {(mprops) => <Message {...mprops} />}
      </InfiniteScroll>
    }
  </Container>
)

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.string.isRequired
}

export default MessageList
