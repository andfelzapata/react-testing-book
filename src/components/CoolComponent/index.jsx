import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CoolComponent extends Component {
  render() {
    const {
      message
    } = this.props
    return (
      <div>
        <h2>Cool Component</h2>
        {message}
      </div>
    )
  }

}

CoolComponent.propTypes = {
  message: PropTypes.string.isRequired
}

export default CoolComponent