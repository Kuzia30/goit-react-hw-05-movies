import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../servises/theMovieAPI";
import { Rings } from "react-loader-spinner";

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFilms() {
      try {
        setStatus("pending");
        const films = await fetchTrendingMovies();
        setTrendingFilms(films);
        setStatus("resolved");
      } catch (error) {
        setStatus("rejected");
        setError(error.message);
      }
    }
    fetchFilms();
  }, []);

  if (status === "idle") {
    return <p>Try later</p>;
  }
  if (status === "pending") {
    return <Rings ariaLabel="loading-indicator" />;
  }
  if (status === "resolved") {
    return (
      <>
        <h1>Trending Films</h1>
        <ul>
          {trendingFilms.map((film) => (
            <li key={film.id}>{film.original_title}</li>
          ))}
        </ul>
      </>
    );
  }

  if (status === "rejected") {
    return <h2>{error}</h2>;
  }
};
export default Home;