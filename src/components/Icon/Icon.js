import React, { Component } from "react";
import PropTypes from "prop-types";
import Draggable from "react-draggable";

class Icon extends Component {
  render() {
    return (
      <Draggable handle=".handle" grid={[25, 25]}>
        <div className="desktop-icon">
          <div class="handle">
            <img
              src={this.props.src}
              draggable="false"
              width={32}
              height={32}
              alt=""
            />
          </div>
          <p>{this.props.name}</p>
        </div>
      </Draggable>
    );
  }
}

Icon.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string
};

Icon.defaultProps = {
  name: "Icon",
  src: "https://cdn.glitch.com/fcca123f-05cd-4716-a7ba-aebe6c6aaff2%2Fwelcome_16928.ico?1507519225165",
}

export default Icon;
