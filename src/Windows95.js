import React, { Component } from 'react'
import Taskbar from './components/Taskbar'
import Window from './components/Window'

import './Windows95.css'
import './ui/scrollbars.css'
import './ui/buttons.css'

class Windows95 extends Component {
  render () {
    return (
      <div className="Windows95-desktop Windows95-desktop-background">
        <div className="desktop-icons">
          <div className="desktop-icon">
            <img src="https://cdn.glitch.com/87ebf192-d762-4a8c-b219-92029a8531ce%2Fwin95_icon_computer.png?1529547438480" width={32} height={32} alt="" />
            <p>My Computer</p>
          </div>
          <div className="desktop-icon">
            <img src="https://cdn.glitch.com/87ebf192-d762-4a8c-b219-92029a8531ce%2Fwin95_icon_recycle.png?1529547438543" width={32} height={32} alt="" />
            <p>Recycle Bin</p>
          </div>
        </div>
        <Taskbar />
        <Window width={400} height={350} x={document.documentElement.clientWidth / 2 - 200} y={document.documentElement.clientHeight / 2 - 175} />
      </div>
    )
  }
}

export default Windows95
