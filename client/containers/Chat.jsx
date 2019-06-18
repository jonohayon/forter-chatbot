import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from 'components/NavBar.jsx'
import MessageList from 'components/MessageList.jsx'
import { getMessages } from 'actions/messages.js'
import { connect } from 'react-redux'
import { Box, TextInput } from 'grommet'

class Chat extends Component {
  constructor (props) {
    super(props)
    this.state = { input: '' }
  }

  componentDidMount () {
    this.props.getMessages()
  }

  render () {
    const { messages } = this.props
    const { text } = this.state

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

          <div>
            <Box
              elevation='large'
            >
              <TextInput
                value={text}
                size='medium'
                plain
                placeholder='Ask a question...'
                onChange={event => this.setState({ text: event.target.value })}
              />
            </Box>
          </div>
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
