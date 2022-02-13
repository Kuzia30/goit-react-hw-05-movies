import { Link, Outlet } from "react-router-dom";
import GoBack from "../GoBack";

const FilmDetails = ({
  poster,
  title,
  release_date,
  votes,
  overview,
  genres,
}) => {
  const date = new Date(release_date);
  const yearRelease = date.getFullYear();
  const userScore = votes * 10;
  const fullPath = `https://image.tmdb.org/t/p/w500${poster}`;
  return (
    <>
      <GoBack from={"home"} />
      <section>
        <div>
          <div>
            <img src={fullPath} alt={title} width="274px" height="398px" />
          </div>
          <div>
            <h2>
              {title} ({yearRelease})
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
};

export default FilmDetails;
