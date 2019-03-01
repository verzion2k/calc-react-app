import React, { Component } from "react";
import CalcSum from "./CalcSum";
import CalcButtonList from "./CalcButtonList";
import "./Calc.scss";

class Calc extends Component {
  render() {
    return (
      <div className="calc__wrapper">
        <CalcSum />
        <CalcButtonList />
      </div>
    );
  }
}

export default Calc;
