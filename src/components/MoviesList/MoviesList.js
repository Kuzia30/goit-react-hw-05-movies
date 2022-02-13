import { Link } from "react-router-dom";

const MoviesList = ({ films, from }) => {
  if (from === "home") {
    return (
      <ul>
        {films.map((film) => (
          <li key={film.id}>
            <Link to={`movies/${film.id}`}>{film.original_title} </Link>
          </li>
        ))}
      </ul>
    );
  }
  if (from === "movies") {
    return (
      <ul>
        {films.map((film) => (
          <li key={film.id}>
            <Link to={film.id.toString()}>{film.original_title} </Link>
          </li>
        ))}
      </ul>
    );
  }
};

export default MoviesList;
