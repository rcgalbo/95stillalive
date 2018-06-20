import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TitleBar.css'

class TitleBar extends Component {
  constructor (props) {
    super(props)

    this.onClickMinimize = this.onClickMinimize.bind(this)
    this.onClickMaximize = this.onClickMaximize.bind(this)
    this.onClickClose = this.onClickClose.bind(this)
  }

  onClickMinimize (event) {
  }
  
  onClickMaximize (event) {
  }
  
  onClickClose (event) {
    this.props.handleClose()
  }

  render () {
    const iconUrl = 'https://cdn.glitch.com/87ebf192-d762-4a8c-b219-92029a8531ce%2Fpicture_icon.png?1529523359727'
    const title = 'Sample window'
    
    return (
      <div className="TitleBar">
        <img className="TitleBar-icon" src={iconUrl} onDoubleClick={this.onClickClose} />
        <span className="TitleBar-text">{title}</span>
        <div className="TitleBar-controls">
          <button className="TitleBar-control-minimize" onClick={this.onClickMinimize} />
          <button className="TitleBar-control-maximize" onClick={this.onClickMaximize} />
          <button className="TitleBar-control-close" onClick={this.onClickClose} />
        </div>
      </div>
    )
  }
}

TitleBar.propTypes = {
  iconUrl: PropTypes.string,
  title: PropTypes.string,
  handleClose: PropTypes.func
}

TitleBar.defaultProps = {
  handleClose: () => {}
}

export default TitleBar
