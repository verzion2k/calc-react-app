import React, { Component } from "react";
import "./CalcButton.scss";

class CalcButton extends Component {
  render() {
    return (
      <div className="calc__button__container">
        <button className="calc__button calc__button--orange">C</button>
        <button className="calc__button calc__button--orange">+/-</button>
        <button className="calc__button calc__button--orange">*</button>
        <button className="calc__button calc__button--orange">/</button>

        <button className="calc__button">7</button>
        <button className="calc__button">8</button>
        <button className="calc__button">9</button>
        <button className="calc__button calc__button--orange">-</button>

        <button className="calc__button">4</button>
        <button className="calc__button">5</button>
        <button className="calc__button">6</button>
        <button className="calc__button calc__button--orange">+</button>

        <button className="calc__button">1</button>
        <button className="calc__button">2</button>
        <button className="calc__button">3</button>

        <div className="column">
          <button className="calc__button calc__button--equal calc__button--orange calc__button--higher">
            =
          </button>
        </div>

        <button className="calc__button calc__button--wider">0</button>
        <button className="calc__button">,</button>
      </div>
    );
  }
}

export default CalcButton;
