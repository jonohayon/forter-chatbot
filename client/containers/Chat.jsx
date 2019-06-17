import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from 'components/NavBar.jsx'
import Message from 'components/Message.jsx'
import { connect } from 'react-redux'
import { Box } from 'grommet'

class Chat extends Component {
  render () {
    const { messages } = this.props
    console.log(messages)

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
  }
}

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProps = ({ messages }) => ({
  messages: messages.messages
})

export default connect(mapStateToProps)(Chat)
