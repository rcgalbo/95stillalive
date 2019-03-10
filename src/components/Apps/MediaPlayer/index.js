import React, { Component } from "react";
import MediaPlayer from "./MediaPlayer";

export default class extends Component {
  render() {
    return <MediaPlayer {...this.props} {...this.state}/>;
  }
}