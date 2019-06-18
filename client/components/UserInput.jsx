import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, TextInput } from 'grommet'

class UserInput extends Component {
  constructor (props) {
    super(props)
    this.state = { input: '' }
  }

  render () {
    const { className } = this.props
    const { text } = this.state

    return (
      <div>
        <Box
          elevation='large'
          className={className}
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
    )
  }
}

UserInput.propTypes = {
  className: PropTypes.string
}

export default styled(UserInput)`
  @media (min-width: 768px) {
    margin: 0 5px 10px 5px;
  }
`
