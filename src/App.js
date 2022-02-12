import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/vievs/Home";

const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </>
);
export default App;
