import React, { Component } from "react";
import Window from "./Window"

class TwitterFeed extends Component {
  render() {
    const {title, iconUrl} = this.props

    const style = {
      width: `${this.props.width}px`,
      height: `${this.props.height}px`,
      left: `${this.props.x}px`,
      top: `${this.props.y}px`,
    }

    const content = (
      <p>This is where tweets will go!</p>
    )

    return (
      <Window
      title={title}
      iconUrl={iconUrl}
      content={content}
      />
    );
  }
}

TwitterFeed.defaultProps = {
  title: "Twitter",
  iconUrl: "https://cdn.glitch.com/fcca123f-05cd-4716-a7ba-aebe6c6aaff2%2FTwitter_Logo_Blue.png?1506582674829",
};

export default TwitterFeed;
