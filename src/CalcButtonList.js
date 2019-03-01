import React, { Component } from "react";
import "./CalcButtonList.scss";

class CalcButtonList extends Component {
  render() {
    return (
      <div>
        <div className="calc__button__container">
          <button className="calc__button calc__button--orange" value="clear">
            C
          </button>
          <button className="calc__button calc__button--orange" value="toMinus">
            +/-
          </button>
          <button className="calc__button calc__button--orange" value="*">
            *
          </button>
          <button className="calc__button calc__button--orange" value="/">
            /
          </button>

          <button className="calc__button" value="7">
            7
          </button>
          <button className="calc__button" value="8">
            8
          </button>
          <button className="calc__button" value="9">
            9
          </button>
          <button className="calc__button calc__button--orange" value="-">
            -
          </button>

          <button className="calc__button" value="4">
            4
          </button>
          <button className="calc__button" value="5">
            5
          </button>
          <button className="calc__button" value="6">
            6
          </button>
          <button className="calc__button calc__button--orange" value="+">
            +
          </button>

          <button className="calc__button" value="1">
            1
          </button>
          <button className="calc__button" value="2">
            2
          </button>
          <button className="calc__button" value="3">
            3
          </button>

          <div className="column">
            <button
              className="calc__button calc__button--equal calc__button--orange calc__button--higher"
              value="="
            >
              =
            </button>
          </div>

          <button className="calc__button calc__button--wider" value="0">
            0
          </button>
          <button className="calc__button" value=".">
            ,
          </button>
        </div>
      </div>
    );
  }
}

export default CalcButtonList;
