import React, { Component } from "react";
import Window from "./Window";

export default class extends Component {
  render() {
    return <Window {...this.props} {...this.state}/>;
  }
}
