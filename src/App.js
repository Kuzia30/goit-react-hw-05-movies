import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./vievs/Home";
import Movies from "./vievs/Movies";
import Film from "./vievs/Film";
import Cast from "./vievs/Cast";
import Reviews from "./vievs/Reviews";

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:itemId" element={<Film />}>
        <Route path="cast" element={<Cast />} />
        <Route path="revievs" element={<Reviews />} />
      </Route>
    </Route>
  </Routes>
);
export default App;
