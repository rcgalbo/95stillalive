import React, { Component } from "react";
import Taskbar from "./Taskbar";

export default class extends Component {
  render() {
    return <Taskbar {...this.props} {...this.state}/>;
  }
}