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
    const { icon, title } = this.props

    return (
      <div className="TitleBar">
        <div className="TitleBar-container">
          {/* The icon is optional. */}
          {icon && <img className="TitleBar-icon" src={icon} onDoubleClick={this.handleClose} />}
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
  icon: PropTypes.string,
  title: PropTypes.string,
  handleClose: PropTypes.func
}

TitleBar.defaultProps = {
  icon: null,
  title: 'Window',
  handleClose: () => {}
}

export default TitleBar
