import React, { Component } from 'react'
import './Window.css'

class Window extends Component {
  render () {
    return (
      <div className="Window">
        <div className="TitleBar">
          <img src="./data/imgs/picture_icon.png" width="16" height="16" onDoubleClick={this.onClickClose} />
          <span className="TitleBar-text">Sample window</span>
          <div className="TitleBar-controls">
            <button className="win95-window-minimize" onClick={this.onClickMinimize} />
            <button className="win95-window-maximize" onClick={this.onClickMaximize} />
            <button className="floating-panel-close" onClick={this.onClickClose} />
          </div>
        </div>
        <div className="MenuBar" />
        <div className="Window-main" />
      </div>
    )
  }
}

export default Window
