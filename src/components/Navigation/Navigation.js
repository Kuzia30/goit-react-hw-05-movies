import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(NavLink)`
  color: green;
  &.active {
    color: red;
  }
`;

const Navigation = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="movies">Movies</Link>
  </nav>
);

export default Navigation;
