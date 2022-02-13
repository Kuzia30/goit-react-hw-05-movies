import { useState, useEffect } from "react";

import { fetchMoviesName } from "../servises/theMovieAPI";
import SearchForm from "../components/SearchForm";
import MoviesList from "../components/MoviesList";
import Loader from "../components/Loader";

const Movies = () => {
  const [name, setName] = useState(null);
  const [status, setStatus] = useState("idle");
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);

  const handleFormSubmit = (name) => {
    setName(name);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setStatus("pending");
        const films = await fetchMoviesName(name);
        if (films.length === 0) {
          return await Promise.reject(new Error("Try another name"));
        } else {
          setFilms(films);
        }
        setStatus("resolved");
      } catch (error) {
        setStatus("rejected");
        setError(error.message);
      }
    }
    if (name) {
      fetchData();
    }
  }, [name]);

  if (status === "idle") {
    return <SearchForm onSubmit={handleFormSubmit} />;
  }
  if (status === "pending") {
    return <Loader />;
  }
  if (status === "resolved") {
    return (
      <>
        <SearchForm onSubmit={handleFormSubmit} />
        <MoviesList films={films} from="movies" />
      </>
    );
  }

  if (status === "rejected") {
    return <h2>{error}</h2>;
  }
};

export default Movies;
