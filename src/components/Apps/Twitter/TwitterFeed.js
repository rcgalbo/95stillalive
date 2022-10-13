import React, { Component } from "react";
// import { Timeline } from "react-twitter-widgets";
import { Feed } from "./Feed.js"
import { getRandomLocation } from "../../../utils/utils";

import Window from "../../Window";

class TwitterFeed extends Component {
  render() {
    const { title, iconUrl, height } = this.props;

    // generate a random window location
    const x = getRandomLocation();
    const y = getRandomLocation();

    const content = (
      // <Timeline
      //   dataSource={{ sourceType: "profile", screenName: "rc/galbo" }}
      //   options={{ username: "rcgalbo", height: { height } }}
      //   onLoad={() => console.log("Timeline is loaded!")}
      // />
      <Feed />
    );

    return (
      <Window
        title={title}
        iconUrl={iconUrl}
        content={content}
        x={x}
        y={y}
        height={height}
      />
    );
  }
}

TwitterFeed.defaultProps = {
  title: "Twitter",
  iconUrl:
    "https://cdn.glitch.com/fcca123f-05cd-4716-a7ba-aebe6c6aaff2%2FTwitter_Logo_Blue.png?1506582674829",
  height: 600
};

export default TwitterFeed;
