import React, { Component } from 'react'
import StartButton from './StartButton'
import './Taskbar.css'

class Taskbar extends Component {
  render () {
    return (
      <div className="Taskbar">
        <StartButton />
        <div className="NotificationWell" />
      </div>
    )
  }
}

export default Taskbar
