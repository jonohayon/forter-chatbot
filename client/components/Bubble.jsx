import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Box } from 'grommet'

const colorForProp = (isOwn, isBot) => isOwn && !isBot
  ? 'light-5'
  : (isBot && !isOwn
    ? 'accent-2'
    : 'brand')

const Bubble = ({ children, isOwn, isBot, className }) => (
  <Box
    className={className}
    background={colorForProp(isOwn, isBot)}
    pad='small'
    margin={{ vertical: '1px' }}
    basis='auto'
  >
    {children}
  </Box>
)

Bubble.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isOwn: PropTypes.bool,
  isBot: PropTypes.bool
}

Bubble.defaultProps = {
  isOwn: false,
  isBot: false
}

export default styled(Bubble).attrs(props => ({
  borderPlacement: props.isOwn ? 'right' : 'left'
}))`
  border-radius: 22px;
  border-top-${props => props.borderPlacement}-radius: 5px;
  ${props => props.continues ? 'border-bottom-' + props.borderPlacement + '-radius: 5px;' : ''}
`
