import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, TextInput } from 'grommet'

const UserInput = ({ setText, text, className }) => (
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
        onChange={setText}
      />
    </Box>
  </div>
)

UserInput.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  setText: PropTypes.func
}

export default styled(UserInput)`
  @media (min-width: 768px) {
    margin: 0 5px 10px 5px;
  }
`
