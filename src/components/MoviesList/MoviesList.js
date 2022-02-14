import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Title, ItemLink } from "./MovieList.styled";

const MoviesList = ({ films, from }) => {
  const location = useLocation();
  if (from === "home") {
    return (
      <>
        <Title>Trending Films</Title>
        <ul>
          {films.map((film) => (
            <li key={film.id}>
              <ItemLink to={`movies/${film.id}`}>
                {film.original_title}{" "}
              </ItemLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
  if (from === "movies") {
    return (
      <ul>
        {films.map((film) => (
          <li key={film.id}>
            <ItemLink to={film.id.toString()} state={{ from: location }}>
              {film.original_title}
            </ItemLink>
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
