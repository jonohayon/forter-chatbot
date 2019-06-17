import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from 'components/NavBar.jsx'
import Message from 'components/Message.jsx'
import { getMessages } from 'actions/messages.js'
import { connect } from 'react-redux'
import { Box } from 'grommet'

const createMessageData = messages => {
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
      isOwn: false,
      isBot: false,
      key: i
    })
  }

  toRender[0].firstMessage = true
  toRender[toRender.length - 1].lastMessage = true
  return toRender
}

class Chat extends Component {
  componentDidMount () {
    this.props.getMessages()
  }

  render () {
    const { messages } = this.props

    return (
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
            {
              messages.length > 0 &&
            createMessageData(messages).map(d => <Message {...d} />)
            }
          </Box>
        </Box>
      </Box>
    )
  }
}

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  getMessages: PropTypes.func.isRequired
}

const mapStateToProps = ({ messages }) => ({
  messages: messages.messages
})

const mapDispatchToProps = dispatch => ({
  getMessages: () => dispatch(getMessages())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)
