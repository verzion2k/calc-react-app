import React, { Component } from "react";
import "./CalcButtonList.scss";

class CalcButtonList extends Component {

  render() {
    return (
      <div>
        <div className="calc__button__container">
          <button className="calc__button calc__button--orange" name="clear" onClick={e => this.props.handleOnClick(e.target.name)} >
            C
          </button>
          <button className="calc__button calc__button--orange" name="toMinus"onClick={e => this.props.handleOnClick(e.target.name)}>
            +/-
          </button>
          <button className="calc__button calc__button--orange" name="*" onClick={e => this.props.handleOnClick(e.target.name)}>
            *
          </button>
          <button className="calc__button calc__button--orange" name="/" onClick={e => this.props.handleOnClick(e.target.name)}>
            /
          </button>

          <button className="calc__button" name="7" onClick={e => this.props.handleOnClick(e.target.name)}>
            7
          </button>
          <button className="calc__button" name="8" onClick={e => this.props.handleOnClick(e.target.name)}>
            8
          </button>
          <button className="calc__button" name="9" onClick={e => this.props.handleOnClick(e.target.name)}>
            9
          </button>
          <button className="calc__button calc__button--orange" name="-" onClick={e => this.props.handleOnClick(e.target.name)}>
            -
          </button>

          <button className="calc__button" name="4" onClick={e => this.props.handleOnClick(e.target.name)}>
            4
          </button>
          <button className="calc__button" name="5" onClick={e => this.props.handleOnClick(e.target.name)}>
            5
          </button>
          <button className="calc__button" name="6" onClick={e => this.props.handleOnClick(e.target.name)}>
            6
          </button>
          <button className="calc__button calc__button--orange" name="+" onClick={e => this.props.handleOnClick(e.target.name)}>
            +
          </button>

          <button className="calc__button" name="1" onClick={e => this.props.handleOnClick(e.target.name)}>
            1
          </button>
          <button className="calc__button" name="2" onClick={e => this.props.handleOnClick(e.target.name)}>
            2
          </button>
          <button className="calc__button" name="3" onClick={e => this.props.handleOnClick(e.target.name)}>
            3
          </button>

          <div className="column">
            <button
              className="calc__button calc__button--equal calc__button--orange calc__button--higher" name="=" onClick={e => this.props.handleOnClick(e.target.name)}
            >
              =
            </button>
          </div>

          <button className="calc__button calc__button--wider" name="0" onClick={e => this.props.handleOnClick(e.target.name)}>
            0
          </button>
          <button className="calc__button" name="." onClick={e => this.props.handleOnClick(e.target.name)}>
            ,
          </button>
        </div>
      </div>
    );
  }
}

export default CalcButtonList;
