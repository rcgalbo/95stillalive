import React, { Component } from "react";
import PropTypes from "prop-types";

class Icon extends Component {
  render() {
    return (
      <div className="desktop-icon">
        <img src={this.props.src} width={32} height={32} alt="" />
        <p>{this.props.name}</p>
      </div>
    );
  }
}

Icon.propTypes = {
    name: PropTypes.string,
    src: PropTypes.string,
};

export default Icon;