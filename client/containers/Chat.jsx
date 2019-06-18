import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from 'components/NavBar.jsx'
import MessageList from 'components/MessageList.jsx'
import UserInput from 'components/UserInput.jsx'
import { getMessages } from 'actions/messages.js'
import { onChange as onInputChange } from 'actions/input.js'
import { connect } from 'react-redux'
import { Box } from 'grommet'

class Chat extends Component {
  componentDidMount () {
    this.props.getMessages()
  }

  render () {
    const {
      messages,
      currentText,
      onInputChange
    } = this.props

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

          <UserInput
            text={currentText}
            onChange={onInputChange}
          />
        </Box>
      </Box>
    )
  }
}

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentText: PropTypes.string,
  getMessages: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired
}

const mapStateToProps = ({ messages, input }) => ({
  messages: messages.messages,
  currentText: input.text
})

const actionCreators = {
  getMessages,
  onInputChange
}

export default connect(
  mapStateToProps,
  actionCreators
)(Chat)
