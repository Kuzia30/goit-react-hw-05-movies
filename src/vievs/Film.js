import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { fetchMovieById } from "../servises/theMovieAPI";
import Loader from "../components/Loader";

const Film = () => {
  const [status, setStatus] = useState("idle");
  const [film, setFilm] = useState(null);
  const [error, setError] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        setStatus("pending");
        const foundFilm = await fetchMovieById(itemId);
        if (!foundFilm) {
          return await Promise.reject(new Error("Try another name"));
        } else {
          setFilm(foundFilm);
        }
        setStatus("resolved");
      } catch (error) {
        setStatus("rejected");
        setError(error.message);
      }
    }
    fetchData();
  }, [itemId]);

  if (status === "idle") {
    return <p>Try again</p>;
  }
  if (status === "pending") {
    return <Loader />;
  }
  if (status === "resolved") {
    const {
      poster_path,
      original_title,
      release_date,
      vote_average,
      overview,
      genres,
    } = film;
    const date = new Date(release_date);
    const yearRelease = date.getFullYear();
    const userScore = vote_average * 10;
    const fullPath = `https://image.tmdb.org/t/p/w500${poster_path}`;
    return (
      <>
        <section>
          <div>
            <div>
              <img
                src={fullPath}
                alt={original_title}
                width="274px"
                height="398px"
              />
            </div>
            <div>
              <h2>
                {original_title} ({yearRelease})
              </h2>
              <p>User score: {userScore}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h4>Genres</h4>
              <p>
                {genres.map((genr) => (
                  <span key={genr.id}>{genr.name} </span>
                ))}
              </p>
            </div>
          </div>
          <div>
            <h4>Additional information</h4>
            <ul>
              <li>
                <Link to={`cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`revievs`}>Revievs</Link>
              </li>
            </ul>
          </div>
        </section>
        <Outlet />
      </>
    );
  }

  if (status === "rejected") {
    return <h2>{error}</h2>;
  }
};

export default Film;
