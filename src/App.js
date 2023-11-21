import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import CalculateBMI from "./components/CalculateBMI";
import WhatIsBMI from "./components/WhatIsBMI";
import "./App.css";
import RecentCalculates from "./components/RecentCalculates";

function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path={"/"} element={<CalculateBMI />}></Route>
				<Route path={"/whatis"} element={<WhatIsBMI />}></Route>
				<Route path={"/recent"} element={<RecentCalculates />}></Route>
			</Routes>
		</div>
	);
}

export default App;
