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
        this.calculate()
    }

    else if(button === "clear"){
        this.deleteAll()
    }
    else if(button === "toMinus"){
        this.deleteLastItem()
    }

    else {
        this.setState({
            result: this.state.result + button
        })
    }
};

  calculate = () => {
    try {
        this.setState({
            result: (eval(this.state.result) || "" ) + ""
        })
    } catch (e) {
        this.setState({
            result: "error"
        })

    }
};

deleteAll = () => {
    this.setState({
        result: ""
    })
};

deleteLastItem = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
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
