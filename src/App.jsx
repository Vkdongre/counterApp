import "./App.css";
// filename app.js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Counter from "./components/Counter";
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Counter />
			</header>
		</div>
	);
}

export default App;
