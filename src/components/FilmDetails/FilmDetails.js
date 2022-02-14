import { Outlet } from "react-router-dom";
import GoBack from "../GoBack";
import {
  DetailsWrap,
  ImgWrap,
  InformationWrap,
  InformationTitle,
  InformationList,
  InformationItem,
  InformationLink,
} from "./FilmDetails.styled";

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
        <DetailsWrap>
          <ImgWrap>
            <img src={fullPath} alt={title} width="274px" height="398px" />
          </ImgWrap>
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
        </DetailsWrap>
        <InformationWrap>
          <InformationTitle>Additional information</InformationTitle>
          <InformationList>
            <InformationItem>
              <InformationLink to={`cast`}>Cast</InformationLink>
            </InformationItem>
            <InformationItem>
              <InformationLink to={`revievs`}>Revievs</InformationLink>
            </InformationItem>
          </InformationList>
        </InformationWrap>
      </section>
      <Outlet />
    </>
  );
};

export default FilmDetails;
