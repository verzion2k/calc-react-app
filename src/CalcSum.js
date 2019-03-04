import React, { Component } from "react";
import "./CalcSum.scss";

class CalcSum extends Component {
  render() {
    let {result} = this.props;
    return (
      <div className="calc__sum">
        <p className="calc__sum__text">
          {result}
        </p>
      </div>
    );
  }
}

export default CalcSum;
