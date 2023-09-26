import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import About from "./components/About";
import UserFeature from "./components/UserFeature";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="/userFeature" element={<UserFeature />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
