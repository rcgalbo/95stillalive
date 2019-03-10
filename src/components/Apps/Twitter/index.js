import React, { Component } from "react";
import TwitterFeed from "./TwitterFeed";

export default class extends Component {
  render() {
    return <TwitterFeed {...this.props} {...this.state}/>;
  }
}
