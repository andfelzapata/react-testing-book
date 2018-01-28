import React from 'react'
import PropTypes from 'prop-types'
import { FONT_SIZE_LARGE } from 'utilities/styleGuide'

const Icon = ({name}) => {
  return (
    <i
      className={`fa fa-${name}`}
      style={{fontSize: FONT_SIZE_LARGE}}
    />
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired
}

export default Icon