import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const MoviesList = ({ films, from }) => {
  const location = useLocation();
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
            <Link to={film.id.toString()} state={{ from: location }}>
              {film.original_title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
};

export default MoviesList;

MoviesList.propTypes = {
  films: PropTypes.array.isRequired,
  from: PropTypes.string.isRequired,
};
