import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import About from "./components/About";
import UserFeature from "./components/UserFeature";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="/userFeature" element={<UserFeature />} />
      </Routes>
    </div>
  );
}

export default App;
