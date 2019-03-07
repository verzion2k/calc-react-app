import React, { Component } from 'react';
import './CalcDisplay.scss';

class CalcDisplay extends Component {
	render() {
		let { displayValue } = this.props;
		return (
			<div className="calc__sum">
				<p className="calc__sum__text">{displayValue}</p>
			</div>
		);
	}
}

export default CalcDisplay;
