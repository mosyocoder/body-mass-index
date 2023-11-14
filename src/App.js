import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import CalculateBMI from "./components/CalculateBMI";
import WhatIsBMI from "./components/WhatIsBMI";
import "./App.css";

function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path={"/"} element={<CalculateBMI />}></Route>
				<Route path={"/whatis"} element={<WhatIsBMI />}></Route>
			</Routes>
		</div>
	);
}

export default App;
