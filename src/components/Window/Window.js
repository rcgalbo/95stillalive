import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TitleBar from './TitleBar'
import MenuBar from './MenuBar'
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
        <div className="Window-container">
          <TitleBar handleClose={() => {}} icon="computer" />
          <MenuBar />

          <div className="Window-main">
            <div className="frame win95-well-border">
              <div className="content">
                <p>feelin cute, might delete later</p>
              </div>
            </div>
          </div>
        </div>
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
  width: 900,
  height: 90000,
  x: 0,
  y: 0
}

export default Window
