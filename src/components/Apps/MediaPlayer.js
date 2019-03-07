import React, { Component } from "react";
import { getRandomLocation } from "./../../utils/utils";
import { Media, Player, controls } from "react-media-player";
const { PlayPause, MuteUnmute } = controls;

import Window from "../Window/Window";

class MediaPlayer extends Component {
  render() {
    const { title, iconUrl, width, height } = this.props;

    // generate a random window location
    const x = getRandomLocation();
    const y = getRandomLocation();

    const content = (
      <Media>
        <div className="media">
          <div className="media-player">
            <Player src="http://www.youtube.com/embed/h3YVKTxTOgU" />
          </div>
          <div className="media-controls">
            <PlayPause />
            <MuteUnmute />
          </div>
        </div>
      </Media>
    );

    return (
      <Window title={title} iconUrl={iconUrl} content={content} x={x} y={y}
      width={width} height={height} />
    );
  }
}

MediaPlayer.defaultProps = {
  title: "Windows Media Player",
  iconUrl: "./../../../assets/icons/windowsMediaPlayer.png",
  width: 800,
  height: 450,
};

export default MediaPlayer;