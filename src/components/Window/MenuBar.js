import React, { Component } from 'react'
import './MenuBar.css'

class MenuBar extends Component {
  render () {
    return (
      <div className="MenuBar">
        <div className="MenuBarItem">File</div>
        <div className="MenuBarItem">Edit</div>
        <div className="MenuBarItem">View</div>
        <div className="MenuBarItem">Help</div>
      </div>
    )
  }
}

export default MenuBar
