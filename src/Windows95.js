import React, { Component } from 'react'
import Taskbar from './components/Taskbar'
import Window from './components/Window'

import './Windows95.css'
import './ui/scrollbars.css'

class Windows95 extends Component {
  render () {
    return (
      <div className="Windows95-desktop Windows95-desktop-background">
        <Taskbar />
        <Window width={400} height={350} x={document.documentElement.clientWidth / 2 - 200} y={document.documentElement.clientHeight / 2 - 175} />
      </div>
    )
  }
}

export default Windows95
