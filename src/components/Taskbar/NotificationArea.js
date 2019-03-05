import React, { Component } from "react";
import "./NotificationArea.css";

class NotificationArea extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timeID = setInterval(() => this.handleTimer(), 1000);
  }

  handleTimer() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className="NotificationArea">
        {this.state.date.getHours()}:{this.state.date.getMinutes()}
      </div>
    );
  }
}

export default NotificationArea;