import React, { Component } from "react";
import CalcSum from "./CalcSum";
import CalcButtonList from "./CalcButtonList";
import "./Calc.scss";

class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };
  }

  handleOnClick = button => {

    if(button === "="){
        this.handleOnEqual()
    }

    else if(button === "clear"){
        this.handleDelete()
    }
    else if(button === "toMinus"){
        this.handleToMinus()
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
};

  handleOnEqual = () => {
      try {
        this.setState({
          result: (eval(this.state.result) || "" ) + ""
        })
    } catch (e) {
        this.setState({
            result: "error"
        })
    }
  }

handleDelete = () => {
    this.setState({
        result: ""
    })
};

handleToMinus = () => {
  const substring = "-";
    if(this.state.result === "") {
      this.setState({
        result: this.state.result
    })
    } else if (!this.state.result.includes(substring)){
      this.setState({
        result: "-" + this.state.result
    })
    } else {
      this.setState({
        result: this.state.result.replace(substring, "")
    })
    }
};

  render() {
    return (
      <div className="calc__wrapper">
        <CalcSum result={this.state.result}/>
        <CalcButtonList handleOnClick={this.handleOnClick}/>
      </div>
    );
  }
}

export default Calc;
