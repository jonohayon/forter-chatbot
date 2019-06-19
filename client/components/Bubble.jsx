import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Box } from 'grommet'

const BubbleImage = styled.img`
  border-radius: inherit;
`

const colorForProp = (isOwn, isBot) => isOwn && !isBot
  ? 'light-5'
  : (isBot && !isOwn
    ? 'accent-2'
    : 'brand')

const Bubble = ({ children, isOwn, isBot, image, className }) => (
  <Box
    className={className}
    background={{ color: colorForProp(isOwn, isBot) }}
    pad={!image ? 'small' : ''}
    basis='auto'
  >
    {
      image &&
      <BubbleImage src={image} />
    }
    {children}
  </Box>
)

Bubble.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isOwn: PropTypes.bool,
  isBot: PropTypes.bool,
  image: PropTypes.string
}

Bubble.defaultProps = {
  isOwn: false,
  isBot: false,
  image: ''
}

export default styled(Bubble).attrs(props => ({
  borderPlacement: props.isOwn ? 'right' : 'left'
}))`
  border-radius: 22px;
  border-top-${props => props.borderPlacement}-radius: 5px;
  ${props => props.continues ? 'border-bottom-' + props.borderPlacement + '-radius: 5px;' : ''}
`
