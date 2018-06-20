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

  onClickMinimize () {
  }
  
  onClickMaximize () {
  }
  
  onClickClose () {
  }

  render () {
    return (
      <div className="TitleBar">
        <img src="./data/imgs/picture_icon.png" width="16" height="16" onDoubleClick={this.onClickClose} />
        <span className="TitleBar-text">Sample window</span>
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
  handleClose: PropTypes.func
}

TitleBar.defaultProps = {
  handleClose: () => {}
}

export default TitleBar
