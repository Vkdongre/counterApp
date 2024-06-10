import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	decrement,
	increment,
	incrementByAmount,
	clearAmount,
	incrementAsync,
} from "../Slice/CounterSlice";
const Counter = () => {
	/* The code snippet `const [count, setCount] = useState(0);` and `const [incrementNumber,
setIncrementAmount] = useState(0);` is using React's `useState` hook to create two state variables
`count` and `incrementNumber` with initial values of 0. */
	// const [count, setCount] = useState(0);
	// const [incrementNumber, setIncrementAmount] = useState(0);
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();
	const [incrementAmount, setIncrementAmount] = React.useState("2");

	return (
		<div>
			<h2>
				Calculator Using Redux <h1>{count}</h1>
			</h2>
			<div className="btnContainer">
				<input
					type="text"
					name="count"
					id="countId"
					className="textbox"
					value={incrementAmount}
					onChange={(e) => setIncrementAmount(Number(e.target.value))}
				/>
				<button
					className="btn btn-secondary"
					onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
				>
					Add count
				</button>
				<button
					className="btn btn-secondary"
					onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
				>
					Add Async
				</button>
				<button className="btn btn-primary" onClick={() => dispatch(increment())}>
					+
				</button>
				<button className="btn btn-success" onClick={() => dispatch(decrement())}>
					-
				</button>
				<button
					className="btn btn-secondary"
					onClick={() => {
						dispatch(clearAmount());
						setIncrementAmount(2);
					}}
				>
					Clear
				</button>
			</div>
		</div>
	);
};
export default Counter;
