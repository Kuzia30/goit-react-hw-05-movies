import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { GlobalStyle } from "./App.styled";
import Navigation from "./components/Navigation";
import Loader from "./components/Loader";

const HomeView = lazy(() =>
  import("./vievs/Home.js" /* webpackChunkName: "HomeView" */)
);
const MoviesView = lazy(() =>
  import("./vievs/Movies.js" /* webpackChunkName: "MoviesView" */)
);
const FilmView = lazy(() =>
  import("./vievs/Film.js" /* webpackChunkName: "FilmView" */)
);
const Cast = lazy(() =>
  import("./vievs/Cast.js" /* webpackChunkName: "Cast" */)
);
const Reviews = lazy(() =>
  import("./vievs/Reviews.js" /* webpackChunkName: "Reviews" */)
);

const App = () => (
  <>
    <GlobalStyle />

    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <HomeView />
            </Suspense>
          }
        />
        <Route
          path="movies"
          element={
            <Suspense fallback={<Loader />}>
              <MoviesView />
            </Suspense>
          }
        />
        <Route
          path="movies/:itemId"
          element={
            <Suspense fallback={<Loader />}>
              <FilmView />
            </Suspense>
          }
        >
          <Route
            path="cast"
            element={
              <Suspense fallback={<Loader />}>
                <Cast />
              </Suspense>
            }
          />
          <Route
            path="revievs"
            element={
              <Suspense fallback={<Loader />}>
                <Reviews />
              </Suspense>
            }
          />
        </Route>
      </Route>
    </Routes>
  </>
);
export default App;
