import Dashboard from "./pages/Dashboard";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

function App() {
	return (
		<>
			<HashRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/menu" element={<Menu />} />
				</Routes>
			</HashRouter>
		</>
	);
}

export default App;
