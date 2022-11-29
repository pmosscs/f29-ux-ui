import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import CssScreen from "./screens/CssScreen";
import DetailScreen from "./screens/DetailScreen";
import TeamScreen from "./screens/TeamScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<HomeScreen />} />
        <Route path="/css" element={<CssScreen />} />
        <Route path="/team" element={<DetailScreen />} />
        <Route path="/detail/:id" element={<TeamScreen />} />
      </Routes>
    </div>
  );
}

export default App;
