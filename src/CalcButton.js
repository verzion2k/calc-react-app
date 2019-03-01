import React, { Component } from "react";
import "./CalcButton.scss";

class CalcButton extends Component {
  render() {
    return (
      <button onClick={this.props.handleOnClick} value={this.props.value}>
        {this.props.label}
      </button>
    );
  }
}

export default CalcButton;
