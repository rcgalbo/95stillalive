import React, { Component } from 'react'
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
    
    let keybindPosition
    if (keybind) {
      label.toLowercase().indexOf(keybind.toLowerCase())
    }
    
    if (isSelected) {
      classNames.push('MenuBarItem-selected')
    }
    
    return <div key={label} className={classNames.join(' ')} onClick={(event) => this.handleMenuItemClick(event, label)}>{label}</div>
  }
  
  renderMenuBarItems (labels, whichSelected) {
    return labels.map(label => this.renderMenuBarItem(label, label.slice(0,1), label === whichSelected))
  }

  render () {
    const labels = ['File', 'Edit', 'View', 'Help']
    const menuItems = this.renderMenuBarItems(labels, this.state.whichSelected)

    return (
      <div className="MenuBar">
        {menuItems}
      </div>
    )
  }
}

export default MenuBar
