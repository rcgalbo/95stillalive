import React, { Component } from 'react'
import './Windows95.css'
import Taskbar from './components/Taskbar'

class Windows95 extends Component {
  render () {
    return (
      <div className="Windows95-desktop Windows95-desktop-background">
        <Taskbar />
      </div>
    )
  }
}

export default Windows95
