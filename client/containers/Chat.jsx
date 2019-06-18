import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from 'components/NavBar.jsx'
import MessageList from 'components/MessageList.jsx'
import UserInput from 'components/UserInput.jsx'
import { getMessages } from 'actions/messages.js'
import { connect } from 'react-redux'
import { Box } from 'grommet'

class Chat extends Component {
  componentDidMount () {
    this.props.getMessages()
  }

  render () {
    const { messages } = this.props

    return (
      <Box fill background='light-3'>
        <NavBar title='The Question Box' />

        <Box
          flex
          width='large'
          direction='column'
          alignSelf='center'
        >
          <MessageList messages={messages} />

          <UserInput />
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
