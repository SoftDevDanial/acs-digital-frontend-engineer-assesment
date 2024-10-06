import { useState } from "react";

const Calculator = () => {
	const [firstNumber, setFirstNumber] = useState(0);
	const [secondNumber, setSecondNumber] = useState(0);
	const [total, setTotal] = useState(firstNumber + secondNumber);

	return (
		<div className="calc-container">
			<div className="calc-item-container">
				<h5>
					<b>Adding Two Numbers</b>
				</h5>
			</div>
			<div className="calc-item-container">
				<input
					type="Number"
					placeholder="First Number"
					value={firstNumber}
					onChange={(e) => {
						setFirstNumber(parseFloat(e.target.value));
					}}
					style={{ width: "91%" }}
				/>
			</div>
			<div className="calc-item-container">
				<input
					type="Number"
					placeholder="Second Number"
					value={secondNumber}
					onChange={(e) => {
						setSecondNumber(parseFloat(e.target.value));
					}}
					style={{ width: "91%" }}
				/>
			</div>
			<div className="calc-item-container">
				<button
					onClick={() => {
						setTotal(firstNumber + secondNumber);
					}}
				>
					Add Two Numbers
				</button>
			</div>
			<div className="calc-item-container">
				<p className="total">Total:{total}</p>
			</div>
		</div>
	);
};

export default Calculator;
