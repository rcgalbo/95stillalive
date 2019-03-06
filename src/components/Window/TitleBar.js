import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TitleBar.css'

class TitleBar extends Component {
  constructor (props) {
    super(props)

    this.handleMinimize = this.handleMinimize.bind(this)
    this.handleMaximize = this.handleMaximize.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleMinimize (event) {
  }
  
  handleMaximize (event) {
  }
  
  handleClose (event) {
    this.props.handleClose()
  }


  render () {
    const { title, iconUrl  } = this.props
    
    return (
      <div className="TitleBar">
        <div className="TitleBar-container">
          {/* The icon is optional. */}
          {<img className="TitleBar-icon" src={iconUrl} onDoubleClick={this.handleClose} />}
          <div className="TitleBar-text">{title}</div>
          <div className="TitleBar-controls">
            <button className="TitleBar-control-minimize button-icon" onClick={this.handleMinimize} />
            <button className="TitleBar-control-maximize button-icon" onClick={this.handleMaximize} />
            <button className="TitleBar-control-close button-icon" onClick={this.handleClose} />
          </div>
        </div>
      </div>
    )
  }
}

TitleBar.propTypes = {
  title: PropTypes.string,
  iconUrl: PropTypes.string,
  handleClose: PropTypes.func
}

TitleBar.defaultProps = {
  title: 'Window',
  iconUrl: 'https://cdn.glitch.com/87ebf192-d762-4a8c-b219-92029a8531ce%2Fwin95_icon_computer_16x16.png?1530147502310',
  handleClose: () => {}
}

export default TitleBar
