import React, { Component } from 'react';
import CalcDisplay from './CalcDisplay';
import CalcButtonList from './CalcButtonList';
import './Calc.scss';

class Calc extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: null,
			displayValue: '0',
			waitingForOperand: false,
			operator: null
		};
	}

	inputDigit = (digit) => {
		const { displayValue, waitingForOperand } = this.state;

		if (waitingForOperand) {
			this.setState({
				displayValue: String(digit),
				waitingForOperand: false
			});
		} else {
			this.setState({
				displayValue: displayValue === '0' ? String(digit) : displayValue + digit
			});
		}
	};

	inputDot = () => {
		const { displayValue, waitingForOperand } = this.state;

		if (waitingForOperand) {
			this.setState({
				displayValue: '.',
				waitingForOperand: false
			});
		} else if (displayValue.indexOf('.') === -1) {
			this.setState({
				displayValue: displayValue + '.',
				waitingForOperand: false
			});
		}
	};

	clearDisplay = () => {
		this.setState({
			displayValue: '0'
		});
	};

	toggleSign = () => {
		const { displayValue } = this.state;

		this.setState({
			displayValue: displayValue.charAt(0) === '-' ? displayValue.substr(1) : '-' + displayValue
		});
	};

	performOperation = (nextOperator) => {
		const { displayValue, operator, value } = this.state;

		const nextValue = parseFloat(displayValue);

		const operations = {
			'/': (prevValue, nextValue) => prevValue / nextValue,
			'*': (prevValue, nextValue) => prevValue * nextValue,
			'+': (prevValue, nextValue) => prevValue + nextValue,
			'-': (prevValue, nextValue) => prevValue - nextValue,
			'=': (prevValue, nextValue) => nextValue
		};

		if (value == null) {
			this.setState({
				value: nextValue
			});
		} else if (operator) {
			const currentValue = value || 0;
			const computedValue = operations[operator](currentValue, nextValue);

			this.setState({
				value: computedValue,
				displayValue: String(computedValue)
			});
		}

		this.setState({
			waitingForOperand: true,
			operator: nextOperator
		});
	};

	render() {
		return (
			<div className="calc__wrapper">
				<CalcDisplay displayValue={this.state.displayValue} />
				<CalcButtonList
					inputDigit={this.inputDigit}
					displayValue={this.state.displayValue}
					inputDot={this.inputDot}
					clearDisplay={this.clearDisplay}
					toggleSign={this.toggleSign}
					performOperation={this.performOperation}
				/>
			</div>
		);
	}
}

export default Calc;
