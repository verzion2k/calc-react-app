import React, { Component } from "react";
import CalcDisplay from "./CalcDisplay";
import CalcButtonList from "./CalcButtonList";
import "./Calc.scss";
import * as math from "mathjs";

class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };
  }

  handleOnClick = button => {
    if (button === "=") {
      this.handleOnEqual();
    } else if (button === "clear") {
      this.handleDelete();
    } else if (button === "toMinus") {
      this.handleToMinus();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };

  handleOnEqual = () => {
    try {
      this.setState({
        result: (math.eval(this.state.result) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };

  handleDelete = () => {
    this.setState({
      result: ""
    });
  };

  handleToMinus = () => {
    const substring = "-";
    const result = this.state.result;

    if (result === "") {
      this.setState({
        result: result
      });
    } else if (!result.includes(substring)) {
      this.setState({
        result: "-" + result
      });
    } else if (result.charAt(0) === "-") {
      this.setState({
        result: result.substring(1)
      });
    }
  };

  render() {
    return (
      <div className="calc__wrapper">
        <CalcDisplay result={this.state.result} />
        <CalcButtonList handleOnClick={this.handleOnClick} />
      </div>
    );
  }
}

export default Calc;
