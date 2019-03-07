import React, { Component } from 'react'
import log from '../../utils/log'
import './MenuBar.css'

class MenuBar extends Component {
  constructor (props) {
    super(props)
  
    this.state = {
      whichSelected: null
    }
    
    this.renderMenuBarItem = this.renderMenuBarItem.bind(this)      
  }
  
  handleMenuItemClick (event, label) {
    this.setState({
      whichSelected: label
    })
  }
    
  renderMenuBarItem (label, keybind, isSelected) {
    const classNames = ['MenuBarItem']
    
    // Underline the keybound label
    let keybindPosition
    let displayLabel
    if (keybind) {
      keybindPosition = label.toLowerCase().indexOf(keybind.toLowerCase())

      // Warn if the keybinding is not found.
      if (keybindPosition === -1) {
        log.error(`keybinding "${keybind}" not found for label "${label}"`)
      }
    }
    if (keybindPosition >= 0) {
      // Splits the label into a fragment so that the keybinding is underlined.
      displayLabel = (
        <React.Fragment>
          {label.slice(0, keybindPosition)}
          <u>{label[keybindPosition]}</u>
          {label.slice(keybindPosition + 1)}
        </React.Fragment>
      )
    } else {
      displayLabel = label
    }
  
    if (isSelected) {
      classNames.push('MenuBarItem-selected')
    }
    
    return (
      <div key={label} className={classNames.join(' ')} onClick={(event) => this.handleMenuItemClick(event, label)}>
        {displayLabel}
      </div>
    )
  }
  
  renderMenuBarItems (labels, whichSelected) {
    return labels.map(label => this.renderMenuBarItem(label.text, label.keybind, label.text === whichSelected))
  }

  render () {
    const labels = [
      {
        text: 'File',
        keybind: 'F'
      },
      {
        text: 'Edit',
        keybind: 'E'
      },
      {
        text: 'View',
        keybind: 'V'
      },
      {
        text: 'Help',
        keybind: 'H'
      }
    ]
    const menuItems = this.renderMenuBarItems(labels, this.state.whichSelected)

    return (
      <div className="MenuBar">
        {menuItems}
      </div>
    )
  }
}

export default MenuBar
