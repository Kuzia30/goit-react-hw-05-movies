import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { GlobalStyle } from "./App.styled";
import Navigation from "./components/Navigation";
import Loader from "./components/Loader";

const HomeView = lazy(() => import("./vievs/Home.js"));
const MoviesView = lazy(() => import("./vievs/Movies.js"));
const FilmView = lazy(() => import("./vievs/Film.js"));
const Cast = lazy(() => import("./vievs/Cast.js"));
const Reviews = lazy(() => import("./vievs/Reviews.js"));

const App = () => (
  <>
    <GlobalStyle />
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomeView />} />
          <Route path="movies" element={<MoviesView />} />
          <Route path="movies/:itemId" element={<FilmView />}>
            <Route path="cast" element={<Cast />} />
            <Route path="revievs" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  </>
);
export default App;
