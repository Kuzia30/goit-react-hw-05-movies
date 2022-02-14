import { Outlet } from "react-router-dom";
import { Link, Nav } from "./Navigation.styled";

const Navigation = () => (
  <>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="movies">Movies</Link>
    </Nav>
    <Outlet />
  </>
);

export default Navigation;
