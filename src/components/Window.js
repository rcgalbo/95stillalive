import React, { Component } from 'react'
import TitleBar from './TitleBar'
import './Window.css'

class Window extends Component {
  render () {
    return (
      <div className="Window">
        <TitleBar handleClose={() => {}} />
        <div className="MenuBar" />
        <div className="Window-main" />
      </div>
    )
  }
}

export default Window
