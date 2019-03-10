import React, { Component } from "react";
import Icon from "./Icon";

export default class extends Component {
  render() {
    return <Icon {...this.props} {...this.state}/>;
  }
}