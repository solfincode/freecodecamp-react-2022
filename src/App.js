import "./App.css";
//router
import { Routes, Route, Link } from "react-router-dom";

//component
import Home from "./screens/Home";
import FirstProject from "./screens/FirstProject";
import AirbnbClone from "./screens/AirbnbClone";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar title="react 2022 mini project" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first-project" element={<FirstProject />} />
        <Route path="/airbnb-clone" element={<AirbnbClone />} />
      </Routes>
    </>
  );
}

export default App;
