import React, { Component } from "react";
import Draggable from "react-draggable";
import PropTypes from "prop-types";
import TitleBar from "./TitleBar";
import MenuBar from "./MenuBar";
import "./Window.css";

class Window extends Component {
  render() {
    const { title, iconUrl, content } = this.props;

    const style = {
      width: `${this.props.width}px`,
      height: `${this.props.height}px`,
      left: `${this.props.x}px`,
      top: `${this.props.y}px`
    };

    return (
      <Draggable handle=".handle">
        <div className="Window" style={style}>
          <div className="Window-container">
            <div className="handle">
              <TitleBar
                title={title}
                iconUrl={iconUrl}
                handleClose={() => {}}
              />
            </div>
            <MenuBar />
            <div className="Window-main">
              <div className="frame win95-well-border">
                <div className="content">{content}</div>
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    );
  }
}

Window.propTypes = {
  title: PropTypes.string,
  iconUrl: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number
};

Window.defaultProps = {
  content: <p>feelin cute, might delete later</p>,
  width: 400,
  height: 350,
  x: document.documentElement.clientWidth / 2 - 200,
  y: document.documentElement.clientHeight / 2 - 175
};

export default Window;
