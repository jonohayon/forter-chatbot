import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from 'components/NavBar.jsx'
import MessageList from 'components/MessageList.jsx'
import UserInput from 'components/UserInput.jsx'
import { getMessages, subscribeToMessages } from 'actions/messages.js'
import { onChange as onInputChange, onSubmit as onInputSubmit, postQuestion } from 'actions/input.js'
import { setUser } from 'actions/user.js'
import { connect } from 'react-redux'
import { Box } from 'grommet'

class Chat extends Component {
  render () {
    const {
      ownUser,
      setUser,
      messages,
      currentText,
      onInputChange,
      postQuestion
    } = this.props

    return (
      <Box fill background='light-3'>
        <NavBar title='The Soup Nazi Online' />

        <Box
          flex
          width='large'
          direction='column'
          alignSelf='center'
        >
          <MessageList messages={messages} user={ownUser} />

          <UserInput
            text={currentText}
            user={ownUser}
            onChange={onInputChange}
            onSubmit={ownUser ? postQuestion : setUser}
          />
        </Box>
      </Box>
    )
  }
}

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentText: PropTypes.string,
  ownUser: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  postQuestion: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired
}

const mapStateToProps = ({ messages, input, user }) => ({
  messages: messages.messages,
  currentText: input.text,
  messagesInitializing: messages.isInitializing,
  ownUser: user.user
})

const mapDispatchToProps = dispatch => ({
  onInputChange: event => dispatch(onInputChange(event)),
  postQuestion: (text, user) => dispatch(postQuestion(text, user)),
  setUser: (user, _) => {
    dispatch(setUser(user))
    dispatch(onInputSubmit)
    dispatch(getMessages())
    dispatch(subscribeToMessages())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)
