import { Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import WhatIsBMI from "./components/WhatIsBMI";
import CalculateBMI from "./components/CalculateBMI";
import CalculatesDetail from "./components/CalculatesDetail";
import RecentCalculates from "./components/RecentCalculates";

function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path={"/"} element={<CalculateBMI />} />
				<Route path={"/whatis"} element={<WhatIsBMI />} />
				<Route path={"/recent"} element={<RecentCalculates />} />
				<Route path={"/recent/:id"} element={<CalculatesDetail />} />
			</Routes>
		</div>
	);
}

export default App;
