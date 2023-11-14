import { Routes, Route, Link } from "react-router-dom";

import CalculateBMI from "./components/CalculateBMI"

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<CalculateBMI />}></Route>
      </Routes>
    </div>
  );
}

export default App;
