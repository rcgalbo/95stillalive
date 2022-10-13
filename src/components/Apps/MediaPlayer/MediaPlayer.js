import React, { Component } from "react";
import { getRandomLocation } from "../../../utils/utils";
import { Media, Player, controls, utils } from "react-media-player";

import Window from "../../Window/";

class MediaPlayer extends Component {
  render() {
    const {
      PlayPause,
      CurrentTime,
      SeekBar,
      Duration,
      MuteUnmute,
      Fullscreen
    } = controls;
    const { keyboardControls } = utils;

    const { title, iconUrl, width, height } = this.props;

    // generate a random window location
    const x = getRandomLocation();
    const y = getRandomLocation();

    const content = (
      <Media>
        {mediaProps => (
          <div
            className="media"
            onKeyDown={keyboardControls.bind(null, mediaProps)}
          >
            <div className="media-player">
              <Player src="https://www.youtube.com/watch?v=cBWwuBwaSNI&t=816s" />
            </div>
            <div className="media-controls">
              <PlayPause />
              <CurrentTime />
              <SeekBar />
              <Duration />
              <MuteUnmute />
              <Fullscreen />
            </div>
          </div>
        )}
      </Media>
    );

    return (
      <Window
        title={title}
        iconUrl={iconUrl}
        content={content}
        x={x}
        y={y}
        width={width}
        height={height}
      />
    );
  }
}

MediaPlayer.defaultProps = {
  title: "Windows Media Player",
  iconUrl: "./../../../assets/icons/windowsMediaPlayer.png",
  width: 700,
  height: 450
};

export default MediaPlayer;
