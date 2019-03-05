// Import CSS first so these styles are lower in the priority stack
import "./Windows95.css";
import "./ui/scrollbars.css";
import "./ui/buttons.css";

import React, { Component } from "react";
import Taskbar from "./components/Taskbar/Taskbar";
import Window from "./components/Window/Window";
import Icon from "./components/Icon/Icon";

class Windows95 extends Component {
  render() {
    return (
      <div className="Windows95-desktop Windows95-desktop-background">
        <Icon
          name="My Computer"
          src="https://cdn.glitch.com/87ebf192-d762-4a8c-b219-92029a8531ce%2Fwin95_icon_computer.png?1529547438480"
        />
        <Icon
          name="Recycle Bin"
          src="https://cdn.glitch.com/87ebf192-d762-4a8c-b219-92029a8531ce%2Fwin95_icon_recycle.png?1529547438543"
        />
        <Icon
          name="Files"
          src="https://cdn.glitch.com/fcca123f-05cd-4716-a7ba-aebe6c6aaff2%2Fbriefcase.png?1506581809139"
        />
        <Taskbar />
        <Window
          width={400}
          height={350}
          x={document.documentElement.clientWidth / 2 - 200}
          y={document.documentElement.clientHeight / 2 - 175}
        />
      </div>
    );
  }
}

export default Windows95;
