import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, TextInput } from 'grommet'

const noop = () => {}

const UserInput = ({ onChange, onSubmit, text, className }) => (
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
        onChange={onChange}
        onKeyUp={({ key }) => key === 'Enter' ? onSubmit(text) : noop()}
      />
    </Box>
  </div>
)

UserInput.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
}

export default styled(UserInput)`
  @media (min-width: 768px) {
    margin: 0 5px 10px 5px;
  }
`
