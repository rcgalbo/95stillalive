import React, { Component } from 'react'
import './StartButton.css'

class StartButton extends Component {
  render () {
    return (
      <button className="StartButton">
        <img className="StartButton-icon" src="https://cdn.glitch.com/87ebf192-d762-4a8c-b219-92029a8531ce%2Fwin95_logo.png?1529546173231" alt="" />
        <span className="StartButton-label">Start</span>
      </button>
    )
  }
}

export default StartButton
