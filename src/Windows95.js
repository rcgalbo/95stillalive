import React, { Component } from 'react'
import './Windows95.css'
import Taskbar from './components/Taskbar'
import Window from './components/Window'

class Windows95 extends Component {
  render () {
    return (
      <div className="Windows95-desktop Windows95-desktop-background">
        <Taskbar />
        <Window width={400} height={350} x={window.clientWidth / 2 - 200} y={window.clientHeight / 2 - 175} />
      </div>
    )
  }
}

export default Windows95
