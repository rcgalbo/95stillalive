import React, { Component } from "react";
import PropTypes from "prop-types";
import Draggable from "react-draggable";

class Icon extends Component {
  render() {
    return (
      <Draggable handle=".handle" grid={[25,25]}>
        <div className="desktop-icon">
          <div class="handle">
            <img src={this.props.src} width={32} height={32} alt=""/>
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

export default Icon;
