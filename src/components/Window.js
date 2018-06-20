import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TitleBar from './TitleBar'
import './Window.css'

class Window extends Component {
  render () {
    const style = {
      width: `${this.props.width}px`,
      height: `${this.props.height}px`,
      left: `${this.props.x}px`,
      top: `${this.props.y}px`,
    }

    return (
      <div className="Window" style={style}>
        <TitleBar handleClose={() => {}} />
        <div className="MenuBar" />
        <div className="Window-main" />
      </div>
    )
  }
}

Window.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number
}

Window.defaultProps = {
  width: 400,
  height: 300,
  x: 0,
  y: 0
}

export default Window
