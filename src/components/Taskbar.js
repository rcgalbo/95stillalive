import React, { Component } from 'react'
import './Taskbar.css'

class Taskbar extends Component {
  render() {
    return (
      <div className="Taskbar">
        <button className="StartButton" />
        <div className="NotificationWell" />
      </div>
    )
  }
}

export default Taskbar
