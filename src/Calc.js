import React, { Component } from 'react';
import CalcSum from "./CalcSum";
import CalcButtonList from "./CalcButtonList"
import './Calc.scss';

class Calc extends Component {
  render() {
    return (
      <>
      <CalcSum />
      <CalcButtonList />
      </>
    )
  }
}

export default Calc;
