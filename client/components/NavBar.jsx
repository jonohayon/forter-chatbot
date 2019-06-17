import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading } from 'grommet'

const NavBar = ({ title }) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: 1 }}
  >
    <Heading level='3' margin='none'>
      {title}
    </Heading>
  </Box>
)

NavBar.propTypes = {
  title: PropTypes.string
}

export default NavBar
