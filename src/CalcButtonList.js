import React, { Component } from 'react';
import './CalcButtonList.scss';

class CalcButtonList extends Component {
	render() {
		const { displayValue } = this.props;
		return (
			<div>
				<div className="calc__button__container">
					{displayValue === '0' ? (
						<button
							className="calc__button calc__button--orange"
							name="clear"
							onClick={() => this.props.clearAll()}
						>
							AC
						</button>
					) : (
						<button
							className="calc__button calc__button--orange"
							name="clear"
							onClick={() => this.props.clearDisplay()}
						>
							C
						</button>
					)}

					<button
						className="calc__button calc__button--orange"
						name="toMinus"
						onClick={() => this.props.toggleSign()}
					>
						+/-
					</button>
					<button className="calc__button calc__button--orange" name="*">
						*
					</button>
					<button
						className="calc__button calc__button--orange"
						name="/"
						onClick={() => this.props.performOperation('/')}
					>
						/
					</button>

					<button className="calc__button" name="7" onClick={() => this.props.inputDigit(7)}>
						7
					</button>
					<button className="calc__button" name="8" onClick={() => this.props.inputDigit(8)}>
						8
					</button>
					<button className="calc__button" name="9" onClick={() => this.props.inputDigit(9)}>
						9
					</button>
					<button
						className="calc__button calc__button--orange"
						name="-"
						onClick={() => this.props.performOperation('-')}
					>
						-
					</button>

					<button className="calc__button" name="4" onClick={() => this.props.inputDigit(4)}>
						4
					</button>
					<button className="calc__button" name="5" onClick={() => this.props.inputDigit(5)}>
						5
					</button>
					<button className="calc__button" name="6" onClick={() => this.props.inputDigit(6)}>
						6
					</button>
					<button
						className="calc__button calc__button--orange"
						name="+"
						onClick={() => this.props.performOperation('+')}
					>
						+
					</button>

					<button className="calc__button" name="1" onClick={() => this.props.inputDigit(1)}>
						1
					</button>
					<button className="calc__button" name="2" onClick={() => this.props.inputDigit(2)}>
						2
					</button>
					<button className="calc__button" name="3" onClick={() => this.props.inputDigit(3)}>
						3
					</button>

					<div className="column">
						<button
							className="calc__button calc__button--equal calc__button--orange calc__button--higher"
							name="="
							onClick={() => this.props.performOperation('=')}
						>
							=
						</button>
					</div>

					<button
						className="calc__button calc__button--wider"
						name="0"
						onClick={() => this.props.inputDigit(0)}
					>
						0
					</button>
					<button className="calc__button" name="." onClick={() => this.props.inputDot()}>
						,
					</button>
				</div>
			</div>
		);
	}
}

export default CalcButtonList;
