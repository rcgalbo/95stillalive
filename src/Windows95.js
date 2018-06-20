import React, { Component } from 'react'
import './Windows95.css'
import Taskbar from './components/Taskbar'
import Window from './components/Window'

class Windows95 extends Component {
  render () {
    return (
      <div className="Windows95-desktop Windows95-desktop-background">
        <Taskbar />
        <Window />
      </div>
    )
  }
}

export default Windows95
