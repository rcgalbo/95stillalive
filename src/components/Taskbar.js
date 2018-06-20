import React, { Component } from 'react'
import StartButton from './StartButton'
import NotificationArea from './NotificationArea'
import './Taskbar.css'

class Taskbar extends Component {
  render () {
    return (
      <div className="Taskbar">
        <StartButton />
        <div className="NotificationArea" />
      </div>
    )
  }
}

export default Taskbar
